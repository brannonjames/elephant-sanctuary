app.controller('HeaderController', [function(){
  const self = this;

  self.open = false;
  self.toggleMenu = function(){
    self.open = !self.open;
  }

  self.closeMenu = function(){
    self.open = false;
  }

}]);