import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

const uuidv4 = require('uuid/v4');

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  notes: string[];
  deadline?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }

  // tslint:disable-next-line: variable-name
  private readonly _todos = new BehaviorSubject<Todo[]>([]);

  readonly todos$ = this._todos.asObservable();

  // we can use pipe here because BehaviorSubject extends Subject extends Observable
  // so we get pipe for free
  // we need to import map though
  readonly completedTodos$ = this.todos$.pipe(
    map(todos => todos.filter(todo => todo.completed))
  );

  readonly incompleteTodos$ = this.todos$.pipe(
    map(todos => todos.filter(todo => !todo.completed))
  );

  private get todos(): Todo[] {
    return this._todos.getValue();
  }

  private set todos(newTodos: Todo[]) {
    this._todos.next(newTodos);
  }

  createTodo(text: string) {
    this.todos = [
      ...this.todos,
      {
        id: uuidv4(),
        text,
        completed: false,
        notes: [],
      },
    ];
  }

  deleteTodo(id: string) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  completeTodo(id: string, completed: boolean) {
    const currentTodos = this.todos;
    const currentTodo = currentTodos.find(todo => todo.id === id);

    if (currentTodo) {
      const currentTodoIndex = currentTodos.indexOf(currentTodo);
      currentTodos[currentTodoIndex] = {
        ...currentTodo,
        completed,
      };
      this.todos = [...currentTodos];
    }
  }

  setNotes(id: string, notes: string[]) {
    const currentTodos = this.todos;
    const currentTodo = currentTodos.find(todo => todo.id === id);

    if (currentTodo) {
      const currentTodoIndex = currentTodos.indexOf(currentTodo);
      currentTodos[currentTodoIndex] = {
        ...currentTodo,
        notes,
      };
      this.todos = [...currentTodos];
    }
  }

  setDeadline(id: string, deadline: Date) {
    const currentTodos = this.todos;
    const currentTodo = currentTodos.find(todo => todo.id === id);

    if (currentTodo) {
      const currentTodoIndex = currentTodos.indexOf(currentTodo);
      currentTodos[currentTodoIndex] = {
        ...currentTodo,
        deadline,
      };
      this.todos = [...currentTodos];
    }
  }
}
