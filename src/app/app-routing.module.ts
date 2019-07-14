import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteConstant } from './constants/route.constant';


const routes: Routes = [
  {
    path: RouteConstant.POSTS,
    loadChildren: () => import('./user-posts/user-posts.module').then(m => m.UserPostsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
