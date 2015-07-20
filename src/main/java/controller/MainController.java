package controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class MainController extends ModelAttributeController {
	@RequestMapping("/")
    public ModelAndView index() {
    	ModelAndView mv = new ModelAndView();
    	mv.setViewName("main");
    	return mv;
    }
}
