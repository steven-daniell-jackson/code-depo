angular.module('app.factory', [])

.factory('Code', function($http){

	var codeFac = {};



// Create get factory to retrieve data from api
	codeFac.all = function(location){
		return	$http.get('http://boiling-mesa-13925.herokuapp.com/api/code/?location=' + location);
	}

	return	codeFac;

})

.factory('CodeCategory', function($http){

	var codeFac = {};

// Create post factory to post data to api
	codeFac.create = function(codeData){

		return	$http.post('http://boiling-mesa-13925.herokuapp.com/api/new-code',codeData)
	}


// Create get factory to retrieve data from api
	codeFac.all = function(){
		return	$http.get('http://boiling-mesa-13925.herokuapp.com/api/code-category');
	}

	return	codeFac;

})

// Return window location /demo and strip slash
.factory('Path', function($http, $location){

	var pathFac = {};

	pathFac.location = function(){

    var location = $location.path();
    var stripSlashLocation = location.replace("/", "");

	return	stripSlashLocation;
	}

	return	pathFac;

});
