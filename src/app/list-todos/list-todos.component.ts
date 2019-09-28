import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  // todos=[
  //   new Todo(1,'Learn to play cricket', false,new Date()),
  //   new Todo(2,'Learn to Angular', false,new Date()),
  //   new Todo(3,'Meet dhoni', false, new Date()),
  // ]

  todos :Todo[]
  message: string

  constructor(private todoService: TodoDataService
    ,private router:Router) { }

  ngOnInit() {
    this.refreshTodo();
  }

  refreshTodo(){

    this.todoService.retrieveAllTodos('vasista').subscribe(
      
      response =>{
        console.log(response);
        this.todos = response;
      } 
    )
  }
  deleteTodo(id){
    this.todoService.deleteTodo('vasista',id).subscribe(
      response =>{
        //console.log(response);
        this.message= `Delete of Todo ${id} Successful!`;
        this.refreshTodo();
      }
    );
  }

  UpdateTodo(id){
    this.router.navigate(['todos',id]);
  }

  createNewTodo(){
    this.router.navigate(['todos',-1]);
  }
  

}

export class Todo{

  constructor(public id:number,
    public description:string,
    public done: boolean,
    public targetDate: Date){

    }
    
}