(function() {
	var header = function(){
		var init = function(){
			$('.header .navbar-nav li').on('click', function(){
				var menuItem = $(this);
				var targetTab = menuItem.data('nav-target');
				updateActiveMenuItemByPageAttribute(targetTab);
				
				displayTabContent(targetTab);
				GlobalFunctions.updateUrlParameter("page", targetTab);
			});
			
			openTabFromUrl();
		};
		
		var openTabFromUrl = function(){
			var page = GlobalFunctions.getUrlParameter("page");
			updateActiveMenuItemByPageAttribute(page)
			displayTabContent(page);
		};
		
		var displayTabContent = function(sContentId){
			$('.body-content').hide();
			$('.body-content#'+sContentId).show();
		};
		
		var updateActiveMenuItemByPageAttribute = function(sPage){
			$('.header .navbar-nav li').removeClass('active');
			$("[data-nav-target='" + sPage + "']").addClass('active');
		};
		
		return{
			init:init
		};
	}();
	
	$(function() {
		header.init();
	});
	
})();