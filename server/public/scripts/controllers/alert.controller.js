app.controller('AlertController', ['alert', function(alert){
  const self = this;
  self.alert = alert.current;
  self.hide = alert.hide;
  self.callback = alert.callback;
}]);