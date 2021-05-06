import { NONE_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'Ken Chan';
  title:string = 'Ken Chan';

  constructor(){
    this.changeTitle('Changed Ken Chan');
  }


  changeTitle(title:string) {
    this.title = title;    
  }
}
