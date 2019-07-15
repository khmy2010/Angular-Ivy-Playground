import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostApiService {
  readonly URL: string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {

  }

  findPosts() {
    return this.get('/posts');
  }

  getPost(id: string) {
    return this.get(`/posts/${id}`); 
  }

  getPostComments(id: string) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('postId', id);

    return this.get(`/comments`, queryParams);
  }

  findUsers() {
    return this.get(`/users`);
  }

  findPostsByUser(userId: string) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('userId', userId);

    return this.get('/posts', queryParams);
  }

  private get(url: string, queryParams?: any) {
    const buildUrl: string = this.URL + url;

    return queryParams ? this.http.get(buildUrl, { params: queryParams }) : this.http.get(buildUrl);
  }
}