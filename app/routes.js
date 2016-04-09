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
    controller: 'codeCtrl',
  })
   .when('/html', {
    templateUrl: 'app/templates/code.html',
    controller: 'codeCtrl',
  })
   .when('/css', {
    templateUrl: 'app/templates/code.html',
    controller: 'codeCtrl',
  })
   .when('/js', {
    templateUrl: 'app/templates/code.html',
    controller: 'codeCtrl',
  })
   .when('/php', {
    templateUrl: 'app/templates/code.html',
    controller: 'codeCtrl',
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
  .when('/demo', {
    templateUrl: 'app/templates/code.html',
    controller: 'codeCtrl',
  })
  .otherwise({
        redirectTo: '/home'
   });

 
});
