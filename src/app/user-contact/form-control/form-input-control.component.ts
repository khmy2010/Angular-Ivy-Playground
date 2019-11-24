import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-input-ctrl',
  templateUrl: './form-input-control.component.html',
  styleUrls: ['./form-input-control.component.css']
})
export class FormInputControlComponent implements OnInit {
  @Input() name: string;
  @Input() root: FormGroup;
  @Input() ctrl: string;

  constructor() { }

  ngOnInit() {
  }

}
