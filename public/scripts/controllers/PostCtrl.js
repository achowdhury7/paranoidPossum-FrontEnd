angular
	.module('paranoidPossumApp')
	.controller('PostCtrl', ['$scope', '$rootScope', 'postFactory', '$sce', 'postPromise', function($scope, $rootScope, postFactory, $sce, postPromise) {		
		$scope.post = postPromise;

		$rootScope.$broadcast('header-update', {
			page: 'post',
			title: $scope.post.title,
			subtitle: $scope.post.subtitle
		});

		if($scope.post.writeUp) $scope.post.writeUp = $sce.trustAsHtml($scope.post.writeUp);
		

		console.log($scope.post);

	}]);