app.controller('AlertController', ['alert', function(alert){
  const self = this;
  self.alert = alert.current;
  self.hide = alert.hide;

  self.onYesClick = function(){
    alert.current.callback();
    alert.hide()
  }

  self.onNoClick = function(){
    alert.hide();
  }

}]);