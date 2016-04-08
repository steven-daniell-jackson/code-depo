angular.module('app.routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/', {
    templateUrl: 'app/templates/home.html',
    controller: '',
  })
  .when('/test', {
    templateUrl: 'app/templates/about.html',
    controller: '',
  });
  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true);
});
