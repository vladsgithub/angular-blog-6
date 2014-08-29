(function() {
	var app = angular.module('angularApp', []),
		scopeArticleController;

	app.controller('ArticleController', function($scope){
		scopeArticleController = $scope;
		this.articles = articles;
	});

	app.directive("blogPost", function(){
		return {
			restrict: 'A',
			templateUrl: 'ui/template/blog-post.html'
		};
	});

	app.directive("popup", function(){

		return {
			restrict: 'E',
			templateUrl: 'ui/template/popup.html',
			controller: function(){
				this.article = {};
				this.submit = function($scope){
					this.article.date = Date.now();
					articles.push(this.article);
					$('popup').modal('hide');
					this.article = {};
					scopeArticleController.formNewPost.$setPristine();
				};
			},
			controllerAs: 'newForm'
		};
	});

	var articles = [
		{
			pic: "01.jpg",
			title: "Title 1",
			author: "Author 1",
			text: "111111 teeeeext tx ttteeeext textttt teeeeext tx ttteeeext textttt teeeeext tx ttteeeext textttt teeeeext tx ttteeeext"
		},
		{
			pic: "02.jpg",
			title: "Title 2",
			author: "Author 2",
			text: "22222 tx ttteeeext textttt teeeeext tx ttteeeext textttt teeeeext tx ttteeeext textttt teeeeext tx ttteeeext"
		},
		{
			pic: "03.jpg",
			title: "Title 3",
			author: "Author 3",
			text: "333333 tttttxxxtt teeeeext tx ttteeeext textttt teeeeext tx ttteeeext textttt teeeeext tx ttteeeext textttt teeeeext tx ttteeeext"
		}
	];
})();