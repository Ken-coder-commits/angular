// 

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDosComponent } from './components/to-dos/to-dos.component';
import { ToDoItemComponent } from './components/to-do-item/to-do-item.component';
import { HttpClientModule } from '@angular/common/http';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './page/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDosComponent,
    ToDoItemComponent,
    AddTodoComponent,
    HeaderComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
