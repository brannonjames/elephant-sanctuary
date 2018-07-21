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
        })
        .otherwise( { redirectTo: '/' });
}]);