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
	
	$(function() {
		ImageCarousel = imageCarousel();
		ImageCarousel.init();
	});
	
	var app = angular.module('imageCarouselApp', []);
	app.controller('carouselController', function($scope){
		$scope.carouselItems = [
		    {
		    	type:'Q',
		    	quote:"You don't stop running because you get old, you get old because you stop running.",
		    	attribution:'Christopher McDougall'
		    },
		    {
		    	type:'Q',
		    	quote:"Once you learn Parkour's basic moves, the world around you changes",
		    	attribution:'Christopher McDougall'
		    },
		    {
		    	type:'Q',
		    	quote:"Whether you're a beginner or have been in the trenches for years, your primary goal as far as physical training goes should be to become stronger.",
		    	attribution:'Chris Rowat'
		    },
		];
	});
	
})();