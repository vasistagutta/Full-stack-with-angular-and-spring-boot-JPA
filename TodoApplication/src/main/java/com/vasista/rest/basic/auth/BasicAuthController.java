package com.vasista.rest.basic.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.vasista.rest.webservices.model.HelloWorldBean;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class BasicAuthController {
	@GetMapping(path="/basicAuth") 
	public AuthenticationBean helloWorldName() {
		return new AuthenticationBean("you are authenticated!");
	}

}
