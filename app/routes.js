angular.module('app.routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/', {
     redirectTo: '/home'
  })
  .when('/home', {
    templateUrl: 'app/templates/home.html',
    controller: 'mainCtrl',
  })
   .when('/wordpress', {
    templateUrl: 'app/templates/code.html',
    controller: 'codeCtrl',
  })
   .when('/cscart', {
    templateUrl: 'app/templates/code.html',
    controller: 'mainCtrl',
  })
   .when('/html', {
    templateUrl: 'app/templates/code.html',
    controller: 'mainCtrl',
  })
   .when('/css', {
    templateUrl: 'app/templates/code.html',
    controller: 'mainCtrl',
  })
   .when('/js', {
    templateUrl: 'app/templates/code.html',
    controller: 'mainCtrl',
  })
   .when('/php', {
    templateUrl: 'app/templates/code.html',
    controller: 'mainCtrl',
  })
   .when('/angular', {
    templateUrl: 'app/templates/code.html',
    controller: 'codeCtrl',
  })
   .when('/bootstrap', {
    templateUrl: 'app/templates/code.html',
    controller: 'codeCtrl',
  })
   .when('/contact', {
    templateUrl: 'app/templates/contact.html',
    controller: '',
  })
   .when('/other', {
    templateUrl: 'app/templates/other.html',
    controller: '',
  })
  .when('/about', {
    templateUrl: 'app/templates/about.html',
    controller: '',
  })
  .otherwise({
        redirectTo: '/home'
   });

 
});
