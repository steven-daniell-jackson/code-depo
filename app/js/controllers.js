angular.module('app.controllers',['app.factory'])
  .controller('mainCtrl', ['$scope', 'Code', 'Path', function($scope, Code, Path){
      
      $scope.test = "test";

  
  }])
  
   .controller('codeCtrl', ['$scope', 'Code', 'Path', function($scope, Code, Path){
      
      $scope.test = "code Ctrl";
  
// Access factory and assign the returned data
Code.all(Path.location())
.success(function(data) {
            $scope.entries = data;
            
            $scope.preloader = false;
           
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

console.log(Path.location());


  
  }]);