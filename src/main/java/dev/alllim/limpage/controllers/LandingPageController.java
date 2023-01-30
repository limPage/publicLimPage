package dev.alllim.limpage.controllers;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping(value = "/")
public class LandingPageController {


    @RequestMapping(value = "/" ,method = RequestMethod.GET, produces = MediaType.TEXT_HTML_VALUE)
    public ModelAndView getLandingPage(){
        ModelAndView modelAndView = new ModelAndView("landingPage/landingPage");

        return modelAndView;
    }



}
