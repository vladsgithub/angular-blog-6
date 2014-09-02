(function() {
	var app = angular.module('angularApp', ['directives']),
		scopeArticleController;

	app.controller('ArticleController', ['$http', function($http){
		//scopeArticleController = $scope;
		//this.articles = articles;
		var blog = this;
		blog.articles = [];

		$http.get('http://54.72.3.96:3000/posts').success(function(data){
			blog.articles = data;
		}).error(function(){
			alert("error!");
		});
	}]);
})();