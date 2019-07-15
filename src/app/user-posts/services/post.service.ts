import { Injectable } from "@angular/core";
import { PostApiService } from 'src/app/post-api/post-api.service';
import { Observable } from 'rxjs';
import { tap, switchMap, map, shareReplay } from 'rxjs/operators';
import { IPostModel } from 'src/app/post-api/model/post.i';
import { ICommentModel } from 'src/app/post-api/model/comment.i';
import { IUserContentModel } from 'src/app/post-api/model/user-content.i';
import { IUserModel } from 'src/app/post-api/model/user.i';

@Injectable()
export class PostService {
  readonly users$: Observable<any> = this.postApiService.findUsers().pipe(shareReplay(1));

  constructor(private postApiService: PostApiService) {

  }

  initialisePosts() {
    const posts$: Observable<any> = this.postApiService.findPosts();
    let users = [];

    return this.users$.pipe(tap((fetchedUsers: Array<any>) => {
      users = fetchedUsers;
    }), switchMap(() => posts$), map((posts: Array<IPostModel>) => {
      return posts.map((post: IPostModel) => {
        return {
          ...post,
          userData: users.find(({id}) => id === post.userId)
        }
      });
    }))
  }

  initialisePost(id: string) {
    const post$: Observable<any> = this.postApiService.getPost(id);
    const comments$: Observable<any> = this.postApiService.getPostComments(id);

    let users = [];
    let post: IPostModel = {} as IPostModel;

    return this.users$.pipe(tap((fetchedUsers: Array<any>) => {
      users = fetchedUsers;
    }), switchMap(() => post$), tap((fetchedPost) => {
      post = fetchedPost;
    }), switchMap(() => comments$), map((comments: Array<ICommentModel>) => {
      return {
        ...post,
        userData: users.find(({id}) => id === post.userId),
        comments
      }
    }));
  }

  initialiseUserContent(userId: string) {
    const posts$: Observable<any> = this.postApiService.findPostsByUser(userId);

    let users = [];

    return this.users$.pipe(tap((fetchedUsers: Array<any>) => {
      users = fetchedUsers;
    }), switchMap(() => posts$), map((posts: Array<IUserContentModel>) => {
      return {
        posts,
        userData: this.findUserData(users, parseInt(userId, 10))
      }
    }));
  }

  private findUserData(users: Array<IUserModel>, userId: number) {
    return users.find(({id}) => id === userId);
  }
}