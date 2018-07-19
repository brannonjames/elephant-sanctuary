var app = angular.module('ElephantApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', { template: '<all-elephants></all-elephants>' })
        .when('/sanctuary', { template: '<sanctuary></sanctuary>' })
        .when('/humans', { template: '<humans></humans>' })
        .otherwise( { redirectTo: '/' });
}]);