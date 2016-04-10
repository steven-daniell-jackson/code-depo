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
  
//   Platform
   .when('/platform/wordpress', {
    templateUrl: 'app/templates/code.html',
    controller: 'codeCtrl',
  })
   .when('/platform/cscart', {
    templateUrl: 'app/templates/code.html',
    controller: 'codeCtrl',
  })
  
//   Templates
  .when('/templates/email', {
    templateUrl: 'app/templates/code.html',
    controller: 'codeCtrl',
  })
   .when('/templates/landing', {
    templateUrl: 'app/templates/code.html',
    controller: 'codeCtrl',
  })
   .when('/templates/angular', {
    templateUrl: 'app/templates/code.html',
    controller: 'codeCtrl',
  })
  .when('/templates/environment', {
    templateUrl: 'app/templates/code.html',
    controller: 'codeCtrl',
  })
//   Snippets
   .when('/static/components', {
    templateUrl: 'app/templates/code.html',
    controller: 'codeCtrl',
  })
   .when('/static/css', {
    templateUrl: 'app/templates/code.html',
    controller: 'codeCtrl',
  })
   .when('/static/js', {
    templateUrl: 'app/templates/code.html',
    controller: 'codeCtrl',
  })
   .when('/static/php', {
    templateUrl: 'app/templates/code.html',
    controller: 'codeCtrl',
  })
   .when('/static/angular', {
    templateUrl: 'app/templates/code.html',
    controller: 'codeCtrl',
  })
   .when('/static/bootstrap', {
    templateUrl: 'app/templates/code.html',
    controller: 'codeCtrl',
  })

// Other
   .when('/other/other', {
    templateUrl: 'app/templates/code.html',
    controller: 'codeAddCtrl',
  })
  
//   Pages
   .when('/contact', {
    templateUrl: 'app/templates/contact.html',
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
   .when('/new-code-entry', {
    templateUrl: 'app/templates/code-entry.html',
    controller: 'codeAddCtrl',
  })
  .otherwise({
        redirectTo: '/home'
   });

 
});
