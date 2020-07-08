package com.mes.uilibraries.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class HomeController {

    @GetMapping(path="/")
	public ModelAndView home(ModelAndView mv) {
		mv.setViewName("index");
		return mv;
    }

    @GetMapping(path="/easyui")
	public ModelAndView easyui(ModelAndView mv) {
		mv.setViewName("easyui");
		return mv;
    }
    
    @GetMapping(path="/vuetify")
	public ModelAndView vuetify(ModelAndView mv) {
		mv.setViewName("vuetify");
		return mv;
	}
    
}