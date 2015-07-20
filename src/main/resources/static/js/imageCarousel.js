(function() {
	var imageCarousel = function(){
		var init = function(){
			$('.image-carousel').slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 5000,
			});
		};
		
		return{
			init:init
		};
	};
	
//	ParkourEndureApp.controller('carouselController', function($scope, $http, $timeout){
//		$scope.carouselItems = [];
//		
//		$http.post('/carouselimages')
//		.success(function(data, status, headers, config){
//			$scope.carouselItems = data;
//			
//			//This is required to run Slick after Angular renders the view.
//			$timeout(function () { $scope.runSlickOnCarousel(data); }, 0); //0ms timeout
//		})
//		.error(function(data, status, headers, config){
//			$scope.carouselItems = [];
//		});
//		
//		$scope.runSlickOnCarousel = function()
//	    {
//			$('.image-carousel').slick({
//				slidesToShow: 1,
//				slidesToScroll: 1,
//				autoplay: true,
//				autoplaySpeed: 5000,
//			});
//	    };
//	});
	
	$(function() {
		ImageCarousel = imageCarousel();
		ImageCarousel.init();
	});
	
})();
