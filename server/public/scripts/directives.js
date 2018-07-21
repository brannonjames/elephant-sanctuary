app
.directive('card', function() {
  return { transclude: true, template: '<ng-transclude></ng-transclude>' }
})
.directive('wildElephant', function(){
  return { templateUrl: 'views/templates/wild-elephant-card.html' }
})
.directive('human', function(){
  return { templateUrl: 'views/templates/human-card.html' }
})
.directive('sanctuaryElephant', function(){
  return { templateUrl: 'views/templates/sanctuary-elephant-card.html' }
});