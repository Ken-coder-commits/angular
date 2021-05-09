import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDosComponent } from './components/to-dos/to-dos.component'
import { ToDoItemComponent } from './components/to-do-item/to-do-item.component'
import { AboutComponent } from './page/about/about.component'

const routes: Routes = [
  {path: '', component: ToDosComponent},
  { path: 'about', component: AboutComponent },
  {path: '**', component: ToDosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
