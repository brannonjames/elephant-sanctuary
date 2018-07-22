app.controller('NewElephantController', ['apiService', '$location', 'alert', function(apiService, $location, alert) {
  const self = this;
  self.elephant = {};
  self.humans = apiService.humans;

  // in case someone goes directly to /add without choosing an elephant
  self.redirectWithNoElephantChoosen = function(){
    if (Object.keys(apiService.elephantToCheckIn).length === 0) {
      $location.path('/');
    }
  }();

  self.addElephant = function(elephant){
    const newElephant = {
      name: elephant.name,
      owner: elephant.owner,
      happiness_level: elephant.happiness_level,
      thumbnail: apiService.elephantToCheckIn.thumbnail,
      url: apiService.elephantToCheckIn.url,
      reddit_id: apiService.elephantToCheckIn.reddit_id
    }
    apiService.serverCall.post('/elephants', newElephant)
    .then(function(){
      return apiService.serverCall.get('/elephants');
    })
    .then(function(elephants){
      return apiService.loadInitialDataFromReddit();
    })
    .then(function(){
      $location.path('/sanctuary');
    })
    .catch(function(err){
      alert.show(err.data.message, true);
    })
  }

}])