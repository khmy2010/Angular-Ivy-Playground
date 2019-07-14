import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from '../../services/post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RouteConstant } from 'src/app/constants/route.constant';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostListComponent implements OnInit {
  posts$: Observable<any>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostService, 
    private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.posts$ = this.postService.initialisePosts();
    this.cdRef.markForCheck();
  }

  ngOnDestroy(): void {
    this.cdRef.detach();
  }

  readPost(id: number) {
    const postId: string = id.toString();

    this.router.navigate([RouteConstant.POST, postId], { relativeTo: this.route})
  }

}
