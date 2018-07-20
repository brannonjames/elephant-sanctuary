app.controller('ElephantsController', ['apiService', '$location', function(apiService, $location) {
  const self = this;
   
  self.wildElephants = apiService.wildElephants;

}])