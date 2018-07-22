app.controller('SanctuaryController', ['apiService', 'alert', function(apiService, alert){
  const self = this;

  self.elephants = apiService.sanctuary;

  self.updateHappiness = function(elephant, newHappinessLevel) {
    elephant.happiness_level = newHappinessLevel;
    apiService.serverCall.update(`/elephants/${elephant.id}`, elephant)
      .then(function(){
        return apiService.serverCall.get('/elephants');
      })
      .then(function(updatedElephants){
        apiService.sanctuary.all = updatedElephants;
      })
  }

  self.checkoutElephant = function(elephant) {
    console.log('18')
    alert.show(`Checkout ${elephant.name}?`, false, function(){
      console.log('20')
      apiService.serverCall.delete(`/elephants/${elephant.id}`)
      .then(function(){
        return apiService.serverCall.get('/elephants');
      })
      .then(function(updatedElephants){
        apiService.sanctuary.all = updatedElephants;
      });
    });
  }

}]);