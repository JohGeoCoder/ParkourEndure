(function() {
	var imageCarousel = function(){
		var init = function(){
			$('.image-carousel').slick({

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