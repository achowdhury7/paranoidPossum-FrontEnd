angular
	.module('paranoidPossumApp')
	.controller('PostCtrl', ['$scope', 'postFactory', '$sce', 'postPromise', function($scope, postFactory, $sce, postPromise) {
		$scope.post = postPromise;
		console.log($scope.post);

	}]);