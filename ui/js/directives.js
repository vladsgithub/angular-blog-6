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
				this.article = {};

				this.submit = function(){
					this.article.date = Date.now();

					if(this.forEditing)
						$scope.blog.editArticle(this.article._id, this.article);
					else
						$scope.blog.addArticle(this.article);

					$('popup').modal('hide');
				};
			},
			controllerAs: 'newForm'
		};
	});
})();