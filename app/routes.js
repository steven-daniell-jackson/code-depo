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
  .when('/static/jquery', {
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
  
  //   Cheatsheet
   .when('/cheatsheet/html', {
    templateUrl: 'app/templates/code.html',
    controller: 'codeCtrl',
  })
   .when('/cheatsheet/css', {
    templateUrl: 'app/templates/code.html',
    controller: 'codeCtrl',
  })
   .when('/cheatsheet/js', {
    templateUrl: 'app/templates/code.html',
    controller: 'codeCtrl',
  })
  .when('/cheatsheet/jquery', {
    templateUrl: 'app/templates/code.html',
    controller: 'codeCtrl',
  })
   .when('/cheatsheet/php', {
    templateUrl: 'app/templates/code.html',
    controller: 'codeCtrl',
  })
   .when('/cheatsheet/angular', {
    templateUrl: 'app/templates/code.html',
    controller: 'codeCtrl',
  })
   .when('/cheatsheet/htaccess', {
    templateUrl: 'app/templates/code.html',
    controller: 'codeCtrl',
  })
.when('/cheatsheet/git', {
    templateUrl: 'app/templates/code.html',
    controller: 'codeCtrl',
  })
  .when('/cheatsheet/java', {
    templateUrl: 'app/templates/code.html',
    controller: 'codeCtrl',
  })
  .when('/cheatsheet/python', {
    templateUrl: 'app/templates/code.html',
    controller: 'codeCtrl',
  })
  .when('/cheatsheet/svn', {
    templateUrl: 'app/templates/code.html',
    controller: 'codeCtrl',
  })
  .when('/cheatsheet/mysql', {
    templateUrl: 'app/templates/code.html',
    controller: 'codeCtrl',
  })
  .when('/cheatsheet/ssh', {
    templateUrl: 'app/templates/code.html',
    controller: 'codeCtrl',
  })
  .when('/cheatsheet/jquery', {
    templateUrl: 'app/templates/code.html',
    controller: 'codeCtrl',
  })
  
// Other
   .when('/other/other', {
    templateUrl: 'app/templates/code.html',
    controller: 'codeCtrl',
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
