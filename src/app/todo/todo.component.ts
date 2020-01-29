import { Component, HostBinding, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { Todo, TodosService } from '../state/todos/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnChanges, OnInit {
  @Input() todo: Todo;
  completed$: Subject<boolean>;
  completed: Observable<boolean>;
  // @HostBinding('class.completed') completed: boolean;

  constructor(private todoState: TodosService) { }

  ngOnInit() {
    this.completed$ = new Subject<boolean>();
    this.completed = this.completed$.asObservable();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.completed$) {
      this.completed$.next(changes.todo.currentValue.completed);
    }
  }

  onCheckboxChange() {
    console.log('checkbox state changed');
    this.todoState.completeTodo(this.todo.id, !this.todo.completed);
    // this.completed = !this.completed;
  }
}
