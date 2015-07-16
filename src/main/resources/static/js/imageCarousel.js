(function() {
	var imageCarousel = function(){
		var init = function(){
			var i = 1;
		};
		
		return{
			init:init
		};
		
	};
	
	ParkourEndureApp.controller('carouselController', function($scope, $http){
		$http.post('/carouselimages')
		.success(function(data, status, headers, config){
			$scope.carouselItems = data;
		})
		.error(function(data, status, headers, config){
			$scope.carouselItems = [];
		});
	});
	
	$(function() {
		ImageCarousel = imageCarousel();
		ImageCarousel.init();
	});
	
})();

$('.image-carousel').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 5000,
});