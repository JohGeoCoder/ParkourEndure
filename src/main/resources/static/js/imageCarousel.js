(function() {
	var header = function(){
		var init = function(){
			$('.image-carousel').slick({

			});
		};
		
		return{
			init:init
		};
	}();
	
	$(function() {
		header.init();
	});
	
})();