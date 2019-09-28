package com.vasista.rest.webservices.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.vasista.rest.webservices.model.HelloWorldBean;

@CrossOrigin(origins="http://localhost:4200")
@RestController

public class HelloWorldController {

	
	@GetMapping(path="/helloWorld") 
	public String helloWorld() {
		return "Hello World";
	}

	@GetMapping(path="/helloWorld/{name}") 
	public HelloWorldBean helloWorldName(@PathVariable("name") String name) {
		return new HelloWorldBean("HelloWorld" + ", "+ name);
	}

}
