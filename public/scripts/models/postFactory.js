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

		obj.getPost = function(id) {
			$http.get('data.json').then(function(response) {				
				return response.data.posts.find(findObjectById(id));				
			});
		};	

		var findObjectById = function(id) {
			return this._id === id;
		};

		return obj;
	}]);