package hello;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import models.Coach;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CoachController {

	@RequestMapping(value="/coaches", method=RequestMethod.POST)
	@ResponseBody
	public List<Coach> getCoaches(){
		List<Coach> coaches = new ArrayList<Coach>();
		
		Coach coach1 = new Coach();
		coaches.add(coach1);
		coach1.setFirstName("John");
		coach1.setLastName("George");
		coach1.setImageUrl("img/pkCoachJohn.png");
		coach1.setDetails("John began practicing parkour in 2005 when parkour coaching in the United States was almost non-existent. He began coaching in 2009 during his time at Bloomsburg University of Pennsylvania, and earned his Level 1 ADAPT coaching qualification in 2011. In 2015 John took the intensive 5-day Level 2 ADAPT coaching qualification, and is actively training for the Level 2 assessments.");
		
		return coaches;
	}
}
