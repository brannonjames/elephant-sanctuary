app.controller('HumansController', ['apiService', '$location', 'alert', function(apiService, $location, alert) {
  const self = this;
  
  self.humans = apiService.humans;
  self.redirectToNewHumanForm = function(){
    $location.path('/humans/add');
  }

  self.deleteUser = function(user){
    if(user.elephant_count > 0){
      alert.show(`Can't delete, ${user.name} has elephants`, true);
    } else {
      console.log('callback')
      alert.show(`Delete ${user.name}?`, false, function(){
        apiService.serverCall.delete(`/humans/${user.id}`)
        .then(function(){
          return apiService.serverCall.get('/humans');
        })
        .then(function(humans){
          apiService.humans.all = humans
        });
      });
    }
  }

  apiService.getHumans();

}])