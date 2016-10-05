angular
	.module('paranoidPossumApp')
	.controller('MainCtrl', ['$scope', '$sce', 'postFactory', 'postListPromise', function($scope, $sce, postFactory, postListPromise) {
		$scope.posts = postFactory.posts;

		$scope.posts.forEach(function(post) {	
			post.subtitle = $sce.trustAsHtml(post.subtitle);
		})

		$scope.posts.forEach(function(post) {
			post.audio = $sce.trustAsHtml(post.audio);
		})

		$scope.posts.forEach(function(post) {	
			post.writeUp = $sce.trustAsHtml(post.writeUp);
		})

		console.log($scope.posts);
	}]);