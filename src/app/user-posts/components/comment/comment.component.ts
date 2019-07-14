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
}
