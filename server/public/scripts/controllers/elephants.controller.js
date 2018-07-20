app.controller('ElephantsController', ['apiService', '$location', function(apiService, $location) {
  const self = this;
  
  self.redirect = function(){
    $location.path('/humans');
  }

  // apiService.reddit.get()
  //   .then(function(elephants){
  //     console.log(elephants);
  //     self.elephants = elephants;
  //   });

  // apiService.serverCall.get('/elephants')
  //   .then(function(elephants){
  //     console.log(elephants);
  //   });  

}])