'use strict';

(function() {
	angular.module('angularApp')
		.controller('ArticleController', function($http, $scope){
			var blog = this,
				urlPosts = 'http://54.72.3.96:3000/posts/';

			blog.articles = [];

			blog.addArticle = function(article) {
				$http.post(urlPosts, article).success(function(data) {
					blog.showArticle();
				}).error(function(){
					alert("addArticle error!");
				});
			};

			blog.fillPopup = function(article){
				$scope.newForm.article = article;
				$scope.newForm.forEditing = true;
			};

			blog.editArticle = function(id, article) {
				$http.put(urlPosts + id, article).success(function(data) {
					blog.showArticle();
				}).error(function(){
					alert("editArticle error!");
				});
			};

			blog.deleteArticle = function(id){
				$http.delete(urlPosts + id).success(function() {
					blog.showArticle();
				}).error(function(){
					alert("deleteArticle error!");
				});
			};

			blog.showArticle = function() {
				$http.get(urlPosts).success(function (data) {
					blog.articles = data;

					// Clearing of the form
					$scope.newForm.article = {};
					$scope.newForm.forEditing = false;
					$scope.formNewPost.$setPristine();
				}).error(function () {
					alert("showArticle error!");
				});
			};


			blog.showArticle();
		});
})();