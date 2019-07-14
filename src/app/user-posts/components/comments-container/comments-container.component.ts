import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'comment-container',
  templateUrl: './comments-container.component.html',
  styleUrls: ['./comments-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentsContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
