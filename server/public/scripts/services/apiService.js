<<<<<<< HEAD
app.service('apiService', ['$http', '$location', function($http, $location){
=======
app.service('apiService', ['$http', 'alert', function($http, alert){
>>>>>>> alert
  const self = this;

  
  self.humans = { all: [] };

  self.wildElephants = { all:[] };
  self.sanctuary = { all: [] };
  self.elephantToCheckIn = {};

  self.redditElephants = [];
  self.flash = {
    message: '',
    type: ''
  }

  self.handleError = function(error){
    self.flash.message = error.data.message;
    self.flash.type = 'error';
  }

  self.handleError = function(err){
    // alert.show(err.data.message, true);
    alert.current.message = err.data.message;
  }

  self.loadInitialDataFromReddit = function(){
    $http({
      method: 'GET',
      url: 'https://www.reddit.com/r/babyelephantgifs/.json?limit=12',
    })
    .then(function(response){
      self.redditElephants = response.data.data.children;
      return self.serverCall.get('/elephants');
    })
    .then(function(elephantsFromServer){

      // take all the elephants I get from reddit and filter out the ones already
      // have in the database by checking ids
      self.sanctuary.all = elephantsFromServer
      self.wildElephants.all = self.redditElephants
        .filter(function(elephantFromReddit){
          return elephantsFromServer.every(function(elephantFromServer){
            return elephantFromServer.reddit_id !== elephantFromReddit.data.id;
          }) && elephantFromReddit.data.preview.images[0].variants.gif &&
          elephantFromReddit.data.thumbnail;
            
        })
        .map(function(elephantFromReddit){
          // return a clean array of objects with just the columns I need
          return {
            url: elephantFromReddit.data.preview.images[0].variants.gif.source.url,
            thumbnail: elephantFromReddit.data.thumbnail,
            reddit_id: elephantFromReddit.data.id
          }
        })
    })
  }

  self.serverCall = {
    get: function(url){
      return $http({
        method: 'GET',
        url: url
      })
      .then(function(response){
        return response.data;
      })
      .catch(self.handleError)
    },
    post: function(url, data){
      return $http({
        method: 'POST',
        url: url,
        data: data
      })
    },
    update: function(url, data){
      return $http({
        method: 'PUT',
        url: url,
        data: data
      })
      .catch(self.handleError)
    },
    delete: function(url){
      return $http({
        method: 'DELETE',
        url: url
      })
      .catch(self.handleError)
    }
  }

  self.loadInitialDataFromReddit();


  self.getHumans = function(){
    self.serverCall.get('/humans')
      .then(function(humans){
        self.humans.all = humans;
    })
  }

}]);