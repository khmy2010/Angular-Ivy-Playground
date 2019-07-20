import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() form: FormGroup;

  @Output() delete: EventEmitter<void> = new EventEmitter<void>();
  @Output() done: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }


}
