import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ICommentModel } from 'src/app/post-api/model/comment.i';

@Component({
  selector: 'comment-container',
  templateUrl: './comments-container.component.html',
  styleUrls: ['./comments-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentsContainerComponent {
  @Input() comments: Array<ICommentModel> = [];
}
