angular
	.module('paranoidPossumApp')
	.factory('postFactory', ['$http', function($http) {
		var obj = {
			posts : []
		};

		obj.getPosts = function() {
			return $http
								.get('data.json');
								
		}; 
	}]);