(function() {
	var app = angular.module('directives', []);

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
})();