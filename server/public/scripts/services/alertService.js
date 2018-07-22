app.service('alert', [function(){
  const self = this;
  self.current = {
    message: '',
    dismissive: false,
    visible: false,
    callback: null
  }

  self.show = function(message, dismissive, callback){
    self.current.message = message;
    self.current.dismissive = dismissive;
    self.current.visible = true;
    self.current.callback = callback;
  }

  self.hide = function(){
    self.current.message = '';
    self.current.dismissive = false;
    self.current.visible = false;
  }


}])