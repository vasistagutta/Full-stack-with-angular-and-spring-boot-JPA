import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { TODO_API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http: HttpClient
  ) { }

  retrieveAllTodos(username){
    return this.http.get<Todo[]>(`${TODO_API_URL}/users/${username}/todos`);
  }

  deleteTodo(username,id){

    return this.http.delete(`${TODO_API_URL}/users/${username}/todos/${id}`);
  }

  retrieveTodo(username, id){
    return this.http.get<Todo>(`${TODO_API_URL}/users/${username}/todos/${id}`);
  }

  //passing the data in the request body
  UpdateTodo(username, id, todo){
    return this.http.put<Todo>(`${TODO_API_URL}/users/${username}/todos/${id}`,todo);
  }

  createNewTodo(username,todo){
    return this.http.post( `${TODO_API_URL}/users/${username}/todos`, todo);
  }

}
