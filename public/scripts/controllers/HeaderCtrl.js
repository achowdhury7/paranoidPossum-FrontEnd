angular
	.module('paranoidPossumApp')
	.controller('HeaderCtrl', ['$scope', function($scope) {
		$scope.$on('header-update', function(event, header) {
			$scope.title = header.title;
			$scope.subtitle = header.subtitle;
			$scope.page = header.page;
		});
	}]);