(function() {
	var header = function(){
		var init = function(){
			$('.header .navbar-nav li').on('click', function(){
				$('.header .navbar-nav li').removeClass('active');
				$(this).addClass('active');
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