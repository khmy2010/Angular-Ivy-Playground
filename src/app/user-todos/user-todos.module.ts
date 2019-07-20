import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './containers/todo-list/todo-list.component';
import { TodoComponent } from './components/todo/todo.component';
import { StoreModule } from '../store/store.module';
import { UserTodosRoutingModule } from './user-todos.routing.module';
import { SharedModule } from '../shared/shared.module';
import { HoverableDirective } from './directives/hoverable.directive';

@NgModule({
  declarations: [
    TodoListComponent, 
    TodoComponent, 
    HoverableDirective
  ],
  imports: [
    CommonModule,
    StoreModule,
    SharedModule,
    UserTodosRoutingModule
  ]
})
export class UserTodosModule { }
