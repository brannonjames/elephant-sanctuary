app.controller('AlertController', ['alert', function(alert){
  const self = this;
  self.alert = alert.current;
  self.hide = alert.hide;

  self.onYesClick = function(){
    console.log('callback')
    alert.current.callback();
    alert.hide()
  }
}]);