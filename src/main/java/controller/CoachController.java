package controller;

import java.util.List;

import model.Coach;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CoachController extends ModelAttributeController{

	@RequestMapping(value="/coachInfo", method=RequestMethod.POST)
	@ResponseBody
	protected List<Coach> getCoachesEndpoint(){
		return this.getCoaches();
	}
}
