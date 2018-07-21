app.controller('SanctuaryController', ['apiService', function(apiService){
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

  self.checkoutElephant = function(id) {
    apiService.serverCall.delete(`/elephants/${id}`)
      .then(function(){
        return apiService.serverCall.get('/elephants');
      })
      .then(function(updatedElephants){
        apiService.sanctuary.all = updatedElephants;
      })
  }

}]);