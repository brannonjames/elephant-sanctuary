app.controller('ElephantsController', ['apiService', function(apiService) {
  const self = this;
  
  
  apiService.reddit.get()
    .then(function(elephants){
      console.log(elephants);
      self.elephants = elephants;
    });

  apiService.serverCall.get('/elephants')
    .then(function(elephants){
      console.log(elephants);
    });  

}]);