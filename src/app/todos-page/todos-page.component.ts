import { Component, OnInit } from '@angular/core';

import { Todo, TodosService } from '../state/todos/todos.service';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.css']
})
export class TodosPageComponent implements OnInit {

  currentTodos: Todo[];
  completedTodos: Todo[];

  constructor(private todoState: TodosService) { }

  ngOnInit() {
    this.todoState.incompleteTodos$.subscribe((todos => this.currentTodos = todos));
    this.todoState.completedTodos$.subscribe((todos => this.completedTodos = todos));
  }
}
