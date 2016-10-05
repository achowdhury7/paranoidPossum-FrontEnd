angular
	.module('paranoidPossumApp', ['ui.router'])
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: './views/home.html',
				controller: 'MainCtrl',
				resolve: {
					postListPromise : function(postFactory) {						
						return postFactory.getPosts();
					}
				}
			})

			.state('post', {
				url: '/posts/{id}', 
				templateUrl: './views/post.html',
				controller: 'PostCtrl', 
				resolve: {
					postPromise : function($stateParams, postFactory) {
						// postFactory.getPost returns a promise
						return postFactory.getPost($stateParams.id); 
					}
				}
			})

		$urlRouterProvider.otherwise('home');	
	}]);