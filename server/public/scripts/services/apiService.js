app.service('apiService', ['$http', function($http){
  const self = this;

  

  self.wildElephants = { all:[] };
  self.sanctuary = { all: [] };

  self.redditElephants = [];

  self.loadInitialDataFromReddit = function(){
    $http({
      method: 'GET',
      url: 'https://www.reddit.com/r/babyelephantgifs/.json',
    })
    .then(function(response){
      self.redditElephants = response.data.data.children;
      return self.serverCall.get('/elephants');
    })
    .then(function(elephantsFromServer){
      self.sanctuary.all = elephantsFromServer
      self.wildElephants.all = self.redditElephants
        .filter(function(elephantFromReddit){
          return elephantsFromServer.every(function(elephantFromServer){
            return elephantFromServer.reddit_id !== elephantFromReddit.data.id;
          }) && elephantFromReddit.data.preview.images[0].variants.gif &&
          elephantFromReddit.data.thumbnail;
            
        })
        .map(function(elephantFromReddit){
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
      .catch(self.handleError)
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

}]);