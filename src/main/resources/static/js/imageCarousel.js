(function() {
	var header = function(){
		var init = function(){
			$('.image-carousel').slick({

			});
			
//			$('.carouselContainer').imageCarousel({
//	           transitionType: "slider" //OPTIONS GO IN HERE
//	       });
		};
		
		return{
			init:init
		};
	}();
	
	$(function() {
		header.init();
	});
	
})();