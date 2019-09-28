package com.vasista.rest.webservices.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.vasista.rest.webservices.model.Todo;

@Service
public class TodoService {
	
	private static List<Todo> todos = new ArrayList();
	private static long idCounter =0;
	
	static {
		todos.add(new Todo(++idCounter,"vasista","Learn to Dance",new Date(),false));
		todos.add(new Todo(++idCounter,"vasista","Learn about Microservices",new Date(),false));
		todos.add(new Todo(++idCounter,"vasista","Learn about angular",new Date(),false));
		
	}
	
	public List<Todo> findAll(){
		return todos;
	}
	
	public Todo deleteById(long id) {
		
		Todo todo = findById(id);
		if(todo ==null)
			return null;
		if(todos.remove(todo)) {
			return todo;
		}
		return null;
	}

	public Todo findById(long id) {
		// TODO Auto-generated method stub
		for(Todo todo: todos) {
			if(todo.getId()==id) {
				return todo;
			}
		}
		return null;
	}
	
	public Todo save(Todo todo) {
		
		//inserting function
		if(todo.getId()==-1 || todo.getId()==0) {
			todo.setId(++idCounter);
			todos.add(todo);
		}else {
			//update 
			deleteById(todo.getId());
			todos.add(todo);
			
		}
		return todo;
	}
	
	
	

}
