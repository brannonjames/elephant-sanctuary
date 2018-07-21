var app = angular.module('ElephantApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
          templateUrl: 'views/elephants.html',
          controller: 'ElephantsController as vm'
        })
        .when('/newelephant', {
          templateUrl: 'views/addElephant.html',
          controller: 'NewElephantController as vm'
        })
        .when('/sanctuary', {
          templateUrl: 'views/sanctuary.html'
        })
        .when('/humans', {
          templateUrl: 'views/humans.html',
          controller: 'HumansController as vm'
        })
        .when('/humans/add', {
          templateUrl: 'views/addHuman.html',
          controller: 'NewHumanController as vm'
        })
        .otherwise( { redirectTo: '/' });
}]);

app.run(['$rootScope', 'apiService', function($rootScope, apiService) {
  $rootScope.$on("$locationChangeSuccess", function(event, next, current) { 
      console.log(event);   
      console.log(next);   
      console.log(current); 
  });
}]);