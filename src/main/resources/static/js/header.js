(function() {
	var header = function(){
		var init = function(){
			$('.headerNav').on('click', function(){
				$('.headerNav').removeClass('selected');
				$(this).addClass('selected');
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