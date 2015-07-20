(function() {
	var header = function(){
		var init = function(){
			
		};
		
		return{
			init:init
		};
	}();
	
	$(function() {
		header.init();
	});
	
	ParkourEndureApp.controller('coachController', function($scope, $http) {
		$scope.selected = {index:0};
		
		$scope.updateSelectedCoach = function(index){
			$scope.selected.index = index;
		};
		
		$http.post('/coachInfo')
		.success(function(data, status, headers, config){
			$scope.coaches = data;
		})
		.error(function(data, status, headers, config){
			$scope.coaches = [];
		});
		
		var i = 10;
	});
	
})();