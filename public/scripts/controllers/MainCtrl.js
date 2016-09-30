angular
	.module('paranoidPossumApp')
	.controller('MainCtrl', ['$scope', 'postFactory', function($scope, postFactory) {
	$scope.posts = postFactory.getPosts().then(function(data) {
									return data;
									console.log(data);
								});;
	}]);