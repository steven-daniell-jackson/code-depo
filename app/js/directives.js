angular.module('app.directives', [])

.directive('navbar', function() {
  return {
    templateUrl: 'app/templates/partials/navbar.html'
  };
})

.directive('home', function() {
  return {
    templateUrl: 'app/templates/home.html'
  };
});
