app.controller('SanctuaryController', ['apiService', function(apiService){
  const self = this;

  self.elephants = apiService.sanctuary;
  
}]);