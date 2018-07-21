app.controller('HumansController', ['apiService', '$location', function(apiService, $location) {
  const self = this;
  
  self.humans = apiService.humans;
  self.redirectToNewHumanForm = function(){
    $location.path('/humans/add');
  }
}])