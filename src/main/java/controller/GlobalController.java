package controller;

import java.util.ArrayList;
import java.util.List;

import model.CarouselItem;
import model.Coach;

import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

public abstract class GlobalController {

	@ModelAttribute("carouselItems")
	public List<CarouselItem> getCarouselItems(){
		List<CarouselItem> items = new ArrayList<CarouselItem>();
		
		CarouselItem item1 = new CarouselItem();
		items.add(item1);
		item1.setType("Q");
		item1.setQuote("You don't stop running because you get old, you get old because you stop running.");
		item1.setAttribution("Christopher McDougall");
		
		CarouselItem item2 = new CarouselItem();
		items.add(item2);
		item2.setType("Q");
		item2.setQuote("Once you learn Parkour's basic moves, the world around you changes");
		item2.setAttribution("Christopher McDougall");
		
		CarouselItem item3 = new CarouselItem();
		items.add(item3);
		item3.setType("Q");
		item3.setQuote("Whether you're a beginner or have been in the trenches for years, your primary goal as far as physical training goes should be to become stronger.");
		item3.setAttribution("Chris Rowat");
		
		return items;
	}
	
	@ModelAttribute("coaches")
	public List<Coach> getCoaches(){
		List<Coach> coaches = new ArrayList<Coach>();
		
		Coach coach1 = new Coach();
		coaches.add(coach1);
		coach1.setFirstName("John");
		coach1.setLastName("George");
		coach1.setImageUrl("img/pkCoachJohn.png");
		coach1.setDetails("John began practicing parkour in 2005 when parkour coaching in the United States was almost non-existent. He began coaching in 2009 during his time at Bloomsburg University of Pennsylvania, and earned his Level 1 ADAPT coaching qualification in 2011. In 2015 John took the intensive 5-day Level 2 ADAPT coaching qualification, and is actively training for the Level 2 assessments.");
		
		Coach coach2 = new Coach();
		coaches.add(coach2);
		coach2.setFirstName("Java");
		coach2.setLastName("Lava");
		coach2.setImageUrl("img/pkCoachJohn.png");
		coach2.setDetails("My loony bun is fine, Benny Lava");
		
		return coaches;
	}
	
	@RequestMapping("/")
    public ModelAndView index() {
    	ModelAndView mv = new ModelAndView();
    	mv.setViewName("main");
    	return mv;
    }
	
	
}
