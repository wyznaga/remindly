import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';

import { TodosService } from './../state/todos/todos.service';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  textInput: FormControl;

  constructor(private todoState: TodosService) { }

  ngOnInit() {
    this.textInput = new FormControl();
  }

  addTodo() {
    this.todoState.createTodo(this.textInput.value);
  }
}
