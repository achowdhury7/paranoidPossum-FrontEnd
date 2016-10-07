angular
	.module('paranoidPossumApp')
	.controller('MainCtrl', ['$scope', '$rootScope', '$sce', 'postFactory', 'postListPromise', function($scope, $rootScope, $sce, postFactory, postListPromise) {
				
		$scope.posts = postFactory.posts;

		$scope.posts.forEach(function(post) {	
			post.subtitle = $sce.trustAsHtml(post.subtitle);
		});

		$scope.posts.forEach(function(post) {
			post.audio = $sce.trustAsHtml(post.audio);
		});		

		console.log($scope.posts);

	}]);