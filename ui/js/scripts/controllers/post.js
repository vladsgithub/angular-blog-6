'use strict';

(function() {
	angular.module('angularApp')
		.controller('PostController', function($scope, $http, $routeParams){
			$http.get('http://54.72.3.96:3000/posts/' + $routeParams.id).success(function (data) {
				$scope.post = data;
			}).error(function () {
				alert("showArticle error!");
			})
		});
})();
