(function() {
	var app = angular.module('angularApp', ['directives']),
		scopeArticleController;

	app.controller('ArticleController', function($http, $scope){
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

		blog.editArticle = function(article) {
			//console.log(article);
			console.log($scope);
			$scope.newForm.article = article;
//			$http.put(urlPosts, article).success(function(data) {
//				console.log("data=",data);
//				blog.showArticle();
//			}).error(function(){
//				alert("editArticle error!");
//			});
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
			}).error(function () {
				alert("showArticle error!");
			});
		};

		blog.showArticle();
	});
})();