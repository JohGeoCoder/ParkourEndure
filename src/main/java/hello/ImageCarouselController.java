package hello;

import java.util.ArrayList;
import java.util.List;

import models.CarouselItem;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ImageCarouselController {

	@RequestMapping(value="carouselimages", method=RequestMethod.POST)
	@ResponseBody
	public List<CarouselItem> getCarouselImages(){
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
}
