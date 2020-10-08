package com.dojosurvery;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class SurverController {
	@RequestMapping("/")
	public String form(HttpSession session) {
		return "form.jsp";
	}
	
	@RequestMapping(value="/result", method=RequestMethod.POST)
	public String showResult(HttpSession session, @RequestParam(value="name") String name, @RequestParam(value="location") String location, @RequestParam(value="language") String language,
@RequestParam(value="comment") String comment) {
		session.setAttribute("name", name);
		session.setAttribute("location", location);
		session.setAttribute("language", language);
		session.setAttribute("comment", comment);
		System.out.println(name + location + language + comment);
		if (language.equals("Java")) {
			return "java.jsp";
		}
		return "result.jsp";
	}
}
