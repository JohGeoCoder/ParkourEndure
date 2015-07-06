(function() {
	var FunctionContainer = function(){
		var init = function(){
			$(document).foundation();
		};
		
		return{
			init:init,
		};
	};
	
	$(function() {
		GlobalFunctions = FunctionContainer();
		GlobalFunctions.init();
	});
	
})();