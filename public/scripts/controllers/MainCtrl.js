angular
	.module('paranoidPossumApp')
	.controller('MainCtrl', ['$scope', '$sce', 'postFactory', 'postPromise', function($scope, $sce, postFactory, postPromise) {
		$scope.posts = postFactory.posts;

		$scope.posts.forEach(function(post) {
			post.audio = $sce.trustAsHtml(post.audio);
		})

		$scope.posts.forEach(function(post) {	
			post.writeUp = $sce.trustAsHtml(post.writeUp);
		})

		console.log($scope.posts);
	}]);