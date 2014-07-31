(function() {
	var app = angular.module('angularApp', []);

	app.controller('ArticleController', function(){
		this.name = "Vlad";
		this.articles = articles;
	});

	var articles = [
		{
			pic: "01",
			title: "Title 1",
			author: "Author 1",
			text: "111111 teeeeext tx ttteeeext textttt teeeeext tx ttteeeext textttt teeeeext tx ttteeeext textttt teeeeext tx ttteeeext"
		},
		{
			pic: "02",
			title: "Title 2",
			author: "Author 2",
			text: "22222 tx ttteeeext textttt teeeeext tx ttteeeext textttt teeeeext tx ttteeeext textttt teeeeext tx ttteeeext"
		},
		{
			pic: "03",
			title: "Title 3",
			author: "Author 3",
			text: "333333 tttttxxxtt teeeeext tx ttteeeext textttt teeeeext tx ttteeeext textttt teeeeext tx ttteeeext textttt teeeeext tx ttteeeext"
		}
	];
})();

