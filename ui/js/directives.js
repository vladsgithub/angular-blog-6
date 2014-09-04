(function() {
	var app = angular.module('directives', []);

	app.directive("blogPost", function(){
		return {
			restrict: 'A',
			templateUrl: 'ui/views/blog-post.html'
		};
	});

	app.directive("popup", function(){
		return {
			restrict: 'E',
			templateUrl: 'ui/views/popup.html',
			controller: function($scope){
				//console.log($scope.newForm);
				this.article = {};


				this.submit = function(){
					this.article.date = Date.now();

					$scope.blog.addArticle(this.article);

					$('popup').modal('hide');
					this.article = {};
					$scope.formNewPost.$setPristine();
				};
			},
			controllerAs: 'newForm'
		};
	});
})();