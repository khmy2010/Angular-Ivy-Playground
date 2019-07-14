import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteConstant } from '../constants/route.constant';
import { PostComponent } from './containers/post/post.component';
import { PostListComponent } from './containers/post-list/post-list.component';

const routes: Routes = [
  {
    path: '',
    component: PostListComponent,
    pathMatch: 'full'
  },
  {
    path: RouteConstant.POST + '/:id',
    component: PostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPostsRoutingModule { }
