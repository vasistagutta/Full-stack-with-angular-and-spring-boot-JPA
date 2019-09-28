package com.vasista.rest.webservices.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.vasista.rest.webservices.model.Todo;
import com.vasista.rest.webservices.service.TodoJpaRepository;
import com.vasista.rest.webservices.service.TodoService;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class TodoJpaResource {
	
	@Autowired
	private TodoService todoService;
	
	@Autowired
	private TodoJpaRepository todoJpaRepository;

	@GetMapping("/jpa/users/{username}/todos")
	public List<Todo> getAllTodos( @PathVariable("username")String username){
		return todoJpaRepository.findByUsername(username);
	}
	@GetMapping("/jpa/users/{username}/todos/{id}")
	public Todo getTodo( @PathVariable("username")String username,@PathVariable("id")long id){
		//return todoService.findById(id);
		return todoJpaRepository.findById(id).get();
	}
	
	//Return nothing and notfound in errorcase
	@DeleteMapping("/jpa/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo (@PathVariable("username")String username, @PathVariable("id")long id){
		//Todo todo = todoService.deleteById(id);
		
		todoJpaRepository.deleteById(id);
		return ResponseEntity.noContent().build();
		
	}
	@PutMapping("/jpa/users/{username}/todos/{id}")
	public ResponseEntity<Todo> updateTodo(@PathVariable("username")String username, @PathVariable("id")long id,
			@RequestBody Todo todo){
		
		//Todo todoUpdated= todoService.save(todo);
		Todo todoUpdated= todoJpaRepository.save(todo);
		
		//Return the data with status
		return new ResponseEntity<Todo>(todo,HttpStatus.OK);
	}
	
	@PostMapping("/jpa/users/{username}/todos")
	public ResponseEntity<Void> createdTodo(@PathVariable("username")String username
			,@RequestBody Todo todo)
	{
		todo.setUsername(username);
		//Todo createdTodo = todoService.save(todo);
		Todo createdTodo= todoJpaRepository.save(todo);
		
		//should redirect to another location
		//of We need to add the id to the current path.
		URI uri= ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").
		buildAndExpand(createdTodo.getId()).toUri();
		
		//post should return the created uri and status ok
		return ResponseEntity.created(uri).build();
	}
	
}
