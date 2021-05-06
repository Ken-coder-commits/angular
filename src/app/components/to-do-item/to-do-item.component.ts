import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { ToDoService } from '../../services/to-do.service';


@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodoItem: EventEmitter<Todo> = new EventEmitter();

  constructor(private to_do_service:ToDoService) { }

  ngOnInit(): void {
  }

  setClasses(){
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }

    return classes;
  }

  onToggle(todo){

    todo.completed = !todo.completed;

    this.to_do_service.toggleCompleted(todo).subscribe(
      Todo => console.log(Todo)
    );
  }

  onDelete(todo) {
    this.deleteTodoItem.emit(todo);
    console.log('deleteTodoItem');
  }
}
