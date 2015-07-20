(function() {
	var Header = function(){
		var init = function(){			
			$('[data-nav-target]').on('click', function(){
				var navItem = $(this);
				var targetPage = navItem.data('nav-target');
				
				navigateToTab(targetPage);
			});
			
			openTabFromUrl();
			
			$('.off-canvas-list li').on('click', function(){
				$('.off-canvas-wrap').removeClass('move-right');
			});
		};
		
		var openTabFromUrl = function(){
			var page = getUrlParameter("page");
			if(!page){
				page = "home";
			}
			
			updateActiveMenuItemByPageAttribute(page)
			displayTabContent(page);
		};
		
		var displayTabContent = function(sContentId){
			$('.body-content').hide();
			$('.body-content#'+sContentId).show();
		};
		
		var updateActiveMenuItemByPageAttribute = function(sPage){
			$('.canvas .top-bar-section li').removeClass('active');
			$(".canvas .top-bar-section [data-nav-target='" + sPage + "']").addClass('active');
		};
		
		var navigateToTab = function(sTargetPage){
			updateActiveMenuItemByPageAttribute(sTargetPage);
			
			displayTabContent(sTargetPage);
			updateUrlParameter("page", sTargetPage);
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
			navigateToTab:navigateToTab
		};
	};
	
	$(function() {
		HeaderNavigation = Header();
		HeaderNavigation.init();
	});
	
})();