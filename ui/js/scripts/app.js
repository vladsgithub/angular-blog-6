'use strict';

(function() {
	angular.module('angularApp', [
		'ngRoute',
		'directives'
	]).config(['$routeProvider',
		function ($routeProvider) {
			$routeProvider
				.when('/posts',{
					templateUrl:'ui/views/blog-posts.html'
				})
				.when('/post/:id',{
					templateUrl: 'ui/views/blog-post.html',
					controller: 'PostController',
					controllerAs: 'post'
				})
				.otherwise({
					redirectTo: '/posts'
				});
		}
	]);
})();