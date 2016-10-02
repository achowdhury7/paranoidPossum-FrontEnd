angular
	.module('paranoidPossumApp', ['ui.router'])
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: './views/home.html',
				controller: 'MainCtrl',
				resolve: {
					postPromise : function(postFactory) {
						return postFactory.getPosts();
					}
				}
			});

		$urlRouterProvider.otherwise('home');	
	}]);