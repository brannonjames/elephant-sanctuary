app.controller('NewHumanController', ['apiService', '$location', function(apiService, $location) {
  const self = this;
  self.newHuman = {};
  
  self.addHuman = function(newHuman){
    apiService.serverCall.post('/humans', newHuman)
      .then(function(){
        return apiService.serverCall.get('humans');
      })
      .then(function(humans){
        apiService.humans.all = humans;
        $location.path('/humans');
      })
  }
  
}]);