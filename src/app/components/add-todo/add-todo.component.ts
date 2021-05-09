import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title:string;
  @Output() addTodoItem: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const todo = {
      title: this.title,
      completed: false
    }
    this.title = null;
    this.addTodoItem.emit(todo);
  }
}
