import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { tap, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {
  form: FormGroup;
  counts: any;

  constructor(private fb: FormBuilder, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.form = this.fb.group({
      todos: this.fb.array([])
    })

    this.todos.valueChanges.pipe(distinctUntilChanged(), tap((todos: Array<any>) => {
      this.updateCounts(todos);
    })).subscribe();
  }

  get todos(): FormArray {
    return (<FormArray> this.form.get('todos'));
  }

  addTodo() {
    this.todos.push(this.fb.group({
      description: [''],
      done: [false],
      completedTime: []
    }));
  }

  deleteTodo(index: number) {
    this.todos.removeAt(index);
  }

  done(index: number) {
    this.todos.at(index).patchValue({
      done: true,
      completedTime: Date.now()
    });
  }

  deleteAll() {
    this.todos.clear();
  }

  private updateCounts(todos: Array<any>) {
    const ret = {
      pending: 0,
      completed: 0,
      all: todos.length
    };

    todos.forEach(({done}) => {
      if (done) {
        ret.completed = ret.completed + 1;
      }
      else {
        ret.pending = ret.pending + 1;
      }
    });

    this.counts = {
      ...ret
    };

    this.cdRef.markForCheck();
  }

}
