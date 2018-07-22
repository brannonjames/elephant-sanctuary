app.controller('ElephantsController', ['apiService', '$location', function(apiService, $location) {
  const self = this;
   
  self.wildElephants = apiService.wildElephants;
  self.checkElephant = function(elephant){
    apiService.elephantToCheckIn = elephant;
    $location.path('/elephants/new');
  }

}])