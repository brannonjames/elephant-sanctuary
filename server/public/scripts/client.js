var app = angular.module('ElephantApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
          title: 'Wild Elephants',
          templateUrl: 'views/elephants.html',
          controller: 'ElephantsController as vm'
        })
        .when('/newelephant', {
          title: 'Add Elephant',
          templateUrl: 'views/addElephant.html',
          controller: 'NewElephantController as vm'
        })
        .when('/sanctuary', {
          title: 'Sanctuary',
          templateUrl: 'views/sanctuary.html',
          controller: 'SanctuaryController as vm'
        })
        .when('/humans', {
          title: 'Humans',
          templateUrl: 'views/humans.html',
          controller: 'HumansController as vm'
        })
        .when('/humans/add', {
          title: 'Add Human',
          templateUrl: 'views/addHuman.html',
          controller: 'NewHumanController as vm'
        })
        .otherwise( { redirectTo: '/' });
}]);

app.run(['$rootScope', 'apiService', function($rootScope, apiService) {
  $rootScope.header = {};
  $rootScope.$on("$routeChangeSuccess", function(event, current, previous) {
      $rootScope.header.text = current.title;
      // apiService.flash = {};
  });
}]);