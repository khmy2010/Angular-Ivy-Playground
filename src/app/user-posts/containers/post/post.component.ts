import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PostService } from '../../services/post.service';
import { tap } from 'rxjs/operators';
import { RouteConstant } from 'src/app/constants/route.constant';
import { Observable } from 'rxjs';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent implements OnInit, OnDestroy {
  postData$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cdRef: ChangeDetectorRef, 
    private postService: PostService) {}

  ngOnInit() {
    this.route.params.pipe(tap((params: Params) => {
      if (params.id) {
        this.postData$ = this.postService.initialisePost(params.id);
        this.postData$.subscribe(console.log)
      }
      else {
        this.router.navigate([RouteConstant.POSTS]);
      }
    })).subscribe();
  }

  ngOnDestroy(): void {
    this.cdRef.detach();
  }

  back() {
    this.router.navigate([RouteConstant.POSTS]);
  }

}
