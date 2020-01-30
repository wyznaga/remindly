import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Todo } from '../state/todos/todos.service';

import { MatCheckboxChange } from '@angular/material';

@Component({
  selector: 'app-completed-todos',
  templateUrl: './completed-todos.component.html',
  styleUrls: ['./completed-todos.component.css']
})
export class CompletedTodosComponent implements OnInit {

  @Input() todos: Todo[];

  constructor() { }

  ngOnInit() {
  }
}
