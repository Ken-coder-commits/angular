import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/Todo';
import { ToDoService } from '../../services/to-do.service';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {
  todos: Todo[];

  constructor(private toDoService:ToDoService) { }

  ngOnInit(): void {
    this.toDoService.limitGetTodosNum(10).subscribe( todos => {
      this.todos = todos;
      console.log('todos', todos);
      console.log(todos[0])
    });
  }

  deleteTodo(todo:Todo){
    //delete this.todos[todo.id-1];
    this.todos = this.todos.filter(t => t.id !== todo.id);
    console.log(this.todos);
    //console.log(this.todos.filter(t => t.id !== todo.id));
  }
}