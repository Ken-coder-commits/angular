import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  toDosUrl:string = 'https://jsonplaceholder.typicode.com/todos';


  constructor(private HttpClient:HttpClient) { }

  getTodos():Observable<Todo[]>{
    return this.HttpClient.get<Todo[]>(this.toDosUrl);
  }

  limitTodosNum(number:number):Observable<Todo[]>{
    let LimitUrl:string = '?_limit='+number
    //this.toDosUrl += LimitUrl;
    console.log(LimitUrl,this.toDosUrl);
    return this.HttpClient.get<Todo[]>(this.toDosUrl+LimitUrl);
  }

  toggleCompleted(todo: Todo):Observable<any>{
    const url = this.toDosUrl+'/'+todo.id;
    return this.HttpClient.put(url,todo,httpOptions);
  }
}
