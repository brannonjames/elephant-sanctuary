app.controller('HumansController', ['apiService', '$location', function(apiService, $location) {
  const self = this;
  
  self.humans = apiService.humans;
  self.redirectToNewHumanForm = function(){
    $location.path('/humans/add');
  }

  self.deleteUser = function(user){
    if(user.elephant_count > 0){
      console.log('Cant delete with checked in elephants');
    } else {
      apiService.serverCall.delete(`/humans/${user.id}`)
        .then(function(){
          return apiService.serverCall.get('/humans');
        })
        .then(function(humans){
          apiService.humans.all = humans
        })
    }
  }

  apiService.getHumans();

}])