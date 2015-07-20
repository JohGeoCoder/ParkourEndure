package controller;

import java.util.List;

import model.Coach;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CoachController extends GlobalController{

	@RequestMapping(value="/coachInfo")
	@ResponseBody
	protected List<Coach> getCoachesEndpoint(){
		return this.getCoaches();
	}
}
