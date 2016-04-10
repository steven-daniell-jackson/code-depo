angular.module('app.directives', [])

.directive('navbar', function() {
  return {
    templateUrl: 'app/views/partials/navbar.html'
  };
})
.directive('directive-footer', function() {
  return {
    templateUrl: 'app/views/partials/footer.html'
  };
})

.directive('home', function() {
  return {
    templateUrl: 'app/views/home.html'
  };
});
