(function() {
	var app = angular.module('angularApp', []);

	app.controller('ArticleController', function(){
		this.articles = articles;
	});

	app.controller('NewFormController', function(){
		this.article = {};
		this.submit = function(){
			this.article.date = Date.now();
			articles.push(this.article);
			$('#modalNewPost').modal('hide');
			this.article = {};
			$scope.formNewPost.$setPristine();
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