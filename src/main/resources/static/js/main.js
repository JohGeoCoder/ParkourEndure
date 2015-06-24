(function() {
	var FunctionContainer = function(){
		var init = function(){
			
		};
		
		var getUrlParameter = function(sParam){
		    var sPageURL = window.location.search.substring(1);
		    var sURLVariables = sPageURL.split('&');
		    for (var i = 0; i < sURLVariables.length; i++) 
		    {
		        var sParameterName = sURLVariables[i].split('=');
		        if (sParameterName[0] == sParam) 
		        {
		            return sParameterName[1];
		        }
		    }
		};
		
		var updateUrlParameter = function(sParam, sValue){			
			var newQueryString = $.query.SET(sParam, sValue).toString();
			window.history.pushState(null, null, newQueryString);
		}
		
		return{
			init:init,
			getUrlParameter:getUrlParameter,
			updateUrlParameter:updateUrlParameter
		};
	};
	
	$(function() {
		GlobalFunctions = FunctionContainer();
	});
	
})();