(function() {
	var app = angular.module('angularApp', []);

	app.controller('ArticleController', function(){
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

$(document).ready(function(){
	$("#newPost").click(function(){
		bootbox.dialog({
			message: $("#formNewPost").html(),
			title: "New post",
			buttons: {
				cancel: {
					label: "Cancel",
					className: "btn-default",
					callback: function() {
						bootbox.hideAll();
					}
				},
				add: {
					label: "Add this new post",
					className: "btn-primary",
					callback: function() {
						alert("great success");
					}
				}
			}
		});
	});
});