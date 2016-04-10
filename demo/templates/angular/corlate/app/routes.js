angular.module('app.routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/', {
     redirectTo: '/home'
  })
  .when('/home', {
    templateUrl: 'app/views/home.html'
  })
  .when('/about', {
    templateUrl: 'app/views/about.html'
  })
  .when('/blog', {
    templateUrl: 'app/views/blog.html'
  })
  .when('/blog-item', {
    templateUrl: 'app/views/blog-item.html'
  })
  .when('/contact', {
    templateUrl: 'app/views/contact.html'
  })
  .when('/portfolio', {
    templateUrl: 'app/views/portfolio.html'
  })
  .when('/pricing', {
    templateUrl: 'app/views/pricing.html'
  })
  .when('/services', {
    templateUrl: 'app/views/services.html'
  })
  .when('/shortcodes', {
    templateUrl: 'app/views/shortcodes.html'
  })
  .otherwise({
        redirectTo: '/404',
        templateUrl: 'app/views/404.html'
   });

 
});
