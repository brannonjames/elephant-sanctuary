app.controller('NewElephantController', ['apiService', '$location', function(apiService, $location) {
  const self = this;
  self.elephant = {};

  // in case someone goes directly to /add without choosing an elephant
  // self.redirectWithNoElephantChoosen = function(){
  //   if (Object.keys(apiService.elephantToCheckIn).length === 0) {
  //     $location.path('/');
  //   }
  // }();

  self.addElephant = function(elephant){
    const newElephant = {
      name: elephant.name,
      owner: elephant.owner,
      happiness_level: elephant.happiness_level,
      thumbnail: apiService.elephantToCheckIn.thumbnail,
      url: apiService.elephantToCheckIn.url,
      reddit_id: apiService.elephantToCheckIn.reddit_id
    }
  }

}])