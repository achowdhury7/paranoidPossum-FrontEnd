angular
	.module('paranoidPossumApp')
	.factory('postFactory', ['$http', function($http) {
		var obj = {
			posts : []
		};

		obj.getPosts = function() {
			return $http.get('data.json').then(function(response) {
				angular.copy(response.data.posts, obj.posts);
				console.log(obj.posts);
			},
			function(error) {
				console.log(error);
			});
								
		}; 

		return obj;
	}]);