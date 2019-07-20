import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      todos: this.fb.array([])
    })
  }

  get todos(): FormArray {
    return (<FormArray> this.form.get('todos'));
  }

  addTodo() {
    this.todos.push(this.fb.group({
      description: [''],
      time: [Date.now()],
      done: [false]
    }));
  }

  deleteTodo(index: number) {
    this.todos.removeAt(index);
  }

  deleteAll() {
    this.todos.clear();
  }

}
