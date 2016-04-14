angular.module('app.controllers',['app.factory'])

// Main Controller
  .controller('mainCtrl', ['$scope', 'Code', 'Path', function($scope, Code, Path){

  
  }])
  
//   Code Controller
   .controller('codeCtrl', ['$scope', 'Code', 'Path', function($scope, Code, Path){
      
      $scope.preloader = true;
  
// Access factory and assign the returned data
Code.all(Path.location())
.success(function(data) {
    
            $scope.entries = data;
            $scope.preloader = false;
            $scope.path = Path.location();
           $scope.message = data.message;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });



  
  }])
  
// Add Code Entry Controller
  .controller('codeAddCtrl', ['$scope', 'CodeCategory', function($scope, CodeCategory){

var platformOptions = {"Wordpress" : "wordpress", "CSCart": "cscart"};
var templateOptions = {"Email" : "email", "Landing Page": "landing", "Angular" : "angular", "Environment" : "environment"};
var staticOptions = {"COMPONENTS" : "components", "CSS": "css", "JS": "js", "PHP": "php", "JQUERY": "jquery"};
var cheatsheetOptions = {
  "HTML" : "html", 
  "CSS": "css", 
  "JS": "js", 
  "JQUERY": "jquery",  
  "PHP": "php", 
  "Angular": "angular", 
  "SSH": "ssh", 
  "HTACCESS": "htaccess", 
  "GIT": "git", 
  "MYSQL": "mysql", 
  "JAVA": "java", 
  "SVN": "svn", 
  "PYTHON": "python", 

};
var otherOptions = {"Other": "other"};


$scope.$watch('category', function (selected) {
    
    
    switch ($scope.category){
        case 'platform': 
        $scope.selectOptions = platformOptions;
        break;
        case 'templates': 
        $scope.selectOptions = templateOptions;
        break;
        case 'static': 
        $scope.selectOptions = staticOptions;
        break;
        case 'cheatsheet': 
        $scope.selectOptions = cheatsheetOptions;
        break;
        case 'other': 
        $scope.selectOptions = otherOptions;
        break;
    }
  });

  // Submit function bound on "Submit" button on form
$scope.submit = function(form){

// Check if form is valid
if(form.$valid) {

// Debug: console.log("Form valid")

// Use Data-binding to build object to send to API
var formData = {

	codeTitle: $scope.codeTitle,
	codeDescription: $scope.codeDescription,
	codeSource: $scope.codeSource,
	codeImg: $scope.codeImg,
	codeDemo: $scope.codeDemo,
	subCategory: $scope.subCategory,
	category: $scope.category
	
}


// Call factory and submit the formData for processing
CodeCategory.create(formData)

 // If successful print returned message from API else print error
 .success(function(data) {

// Clear form
$scope.codeTitle = '';
$scope.codeDescription = '';
$scope.codeSource = '';
$scope.codeImg = '';
$scope.subCategory = '';
$scope.category = '';


// Data binding on status to log API returned message
$scope.status = data.message;
console.log($scope.status);
})
 .error(function(data) {
 	console.log('Error: ' + data);
 });
}

}

  
  }]);
  
  
  