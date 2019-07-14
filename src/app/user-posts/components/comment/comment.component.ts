import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ICommentModel } from 'src/app/post-api/model/comment.i';

@Component({
  selector: 'post-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentComponent {
  @Input() comment: ICommentModel;

  ngOnChanges(changes): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('this.comment (CC): ', this.comment);
  }
}
