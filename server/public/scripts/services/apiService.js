app.service('apiService', ['$http', function($http){
  const self = this;

  self.handleError = function(error){
    console.log(error);
  }

  self.reddit = {
    get: function(){
      return $http({
        method: 'GET',
        url: 'https://www.reddit.com/r/babyelephantgifs/.json',
      })
      .then(function(response){
        return response.data.data.children;
      })
      .catch(self.handleError)
    }
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

}]);