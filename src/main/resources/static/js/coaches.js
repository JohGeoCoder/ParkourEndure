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
	
	ParkourEndureApp.controller('coachController', function($scope) {
		$scope.selected = 0;
		
		$scope.setSelected = function(selected) {
			$scope.selected = selected;
		}
		
	    $scope.coaches = [
	        {
	        	firstName:'John', 
	        	lastName:'George',
	        	imageUrl:'img/pkCoachJohn.png',
	        	details:'John began practicing parkour in 2005 when parkour coaching in the United States was almost non-existent. He began coaching in 2009 during his time at Bloomsburg University of Pennsylvania, and earned his Level 1 ADAPT coaching qualification in 2011. In 2015 John took the intensive 5-day Level 2 ADAPT coaching qualification, and is actively training for the Level 2 assessments.'
	        }
	    ];
	});
	
})();