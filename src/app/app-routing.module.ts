import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteConstant } from './constants/route.constant';


const routes: Routes = [
  {
    path: RouteConstant.POSTS,
    loadChildren: () => import('./user-posts/user-posts.module').then(m => m.UserPostsModule)
  },
  {
    path: RouteConstant.TODOS,
    loadChildren: () => import('./user-todos/user-todos.module').then(m => m.UserTodosModule)
  },
  {
    path: RouteConstant.CONTACT,
    loadChildren: () => import('./user-contact/user-contact.module').then(m => m.UserContactModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
