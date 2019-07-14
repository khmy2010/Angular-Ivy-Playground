import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './containers/post-list/post-list.component';
import { UserPostsRoutingModule } from './user-posts.routing.module';
import { PostComponent } from './containers/post/post.component';
import { CommentsContainerComponent } from './components/comments-container/comments-container.component';
import { CommentComponent } from './components/comment/comment.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { SharedModule } from '../shared/shared.module';
import { PostService } from './services/post.service';

@NgModule({
  declarations: [
    PostListComponent, 
    PostComponent, 
    CommentsContainerComponent, 
    CommentComponent,
    PostCardComponent
  ],
  imports: [
    CommonModule,
    UserPostsRoutingModule,
    SharedModule
  ],
  providers: [PostService]
})
export class UserPostsModule { }
