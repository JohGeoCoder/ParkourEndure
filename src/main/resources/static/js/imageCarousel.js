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
	
})();