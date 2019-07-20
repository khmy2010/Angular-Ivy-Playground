import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompletedComponent implements OnInit {
  @Input() data: any;
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    console.log('this.data: ', this.data);
  }

}
