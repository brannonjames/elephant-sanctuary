app.controller('HeaderController', ['$rootScope', function($rootScope){
  const self = this;

  self.header = $rootScope.header;
  self.open = false;
  self.toggleMenu = function(){
    self.open = !self.open;
  }

  self.closeMenu = function(){
    self.open = false;
  }

}]);