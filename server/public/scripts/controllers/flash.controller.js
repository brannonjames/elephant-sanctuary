app.controller('FlashController', ['apiService', function(apiService){
  const self = this;
  self.flash = apiService.flash;
}]);