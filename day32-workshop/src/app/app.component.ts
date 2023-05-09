import { Component } from '@angular/core';
import { Todo } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todos: Todo[] = []
  todo: Todo | null = {
    title: 'My list of things',
    name: 'fred',
    tasks: [
      { task: 'Jogging', priority: 'hi', dueDate: '2023-05-10T16:01' },
      { task: 'Watching TV', priority: 'me', dueDate: '2023-05-10T16:01' },
    ]
  }

  newTask(t: Todo) {
    this.todos.push(t)
  }

  selectedTodo(todo: Todo) {
    this.todo = todo
    console.info('>> selected Todo: ', this.todo)
  }
}
