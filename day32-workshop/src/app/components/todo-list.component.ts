import { Component, Input, Output } from '@angular/core';
import { Todo } from '../models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  @Input()
  todos: Todo[] = []

  @Output()
  onSelectedTodo = new Subject<Todo>()

  selected(i: number) {
    this.onSelectedTodo.next(this.todos[i])
  }

}
