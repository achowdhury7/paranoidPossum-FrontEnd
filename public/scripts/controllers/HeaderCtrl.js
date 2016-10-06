angular
	.module('paranoidPossumApp')
	.controller('HeaderCtrl', ['$scope', 'postFactory', function($scope, postFactory) {
		$scope.$on('header-update', function(event, header) {
			$scope.title = header.title;
			$scope.subtitle = header.subtitle;
			$scope.page = header.page;
		});

		$scope.posts = postFactory.posts;
	}]);