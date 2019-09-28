package com.vasista.rest.webservices.service;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.vasista.rest.webservices.model.Todo;

@Repository
public interface TodoJpaRepository extends JpaRepository<Todo, Long>{
	
	//search by username
	
	public List<Todo> findByUsername(String username);

}
