app
.directive('card', function() {
  return { transclude: true, template: '<ng-transclude></ng-transclude>' }
})
.directive('wildElephant', function(){
  return { templateUrl: 'views/templates/wild-elephant-card.html' }
})