import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Todo } from './models';
import { TaskComponent } from './components/task.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  //@ViewChild(TaskComponent)
  @ViewChild('task')
  taskComp!: TaskComponent

  @ViewChild('myButton')
  myButton!: ElementRef

  todos: Todo[] = []
  todo: Todo | null = {
    title: 'My list of things',
    name: 'fred',
    tasks: [
      { task: 'Jogging', priority: 'hi', dueDate: '2023-05-10T16:01' },
      { task: 'Watching TV', priority: 'me', dueDate: '2023-05-10T16:01' },
    ]
  }

  ngOnInit(): void {
      console.info('>>. onInit: ', this.taskComp)
  }

  ngAfterViewInit(): void {
      console.info('>>. onAfterViewInit: ', this.taskComp)
      // Performing manual attribute binding
      this.taskComp.value = this.todo
      this.taskComp.onNewTask.subscribe(
        (event: Todo) => {
          console.info('new task: ', event)
          this.newTask(event)
        }
      )
      console.info('>> myButton: ', this.myButton.nativeElement)
      this.myButton.nativeElement.innerText = 'Updated the label'
      this.myButton.nativeElement.onClick = () => {
        console.info('button clicked')
      }
  }

  deleteTask() {
    const t = this.taskComp.value
    console.info('>>> delete Task: ', t)
  }

  newTask(t: Todo) {
    this.todos.push(t)
  }

  selectedTodo(todo: Todo) {
    this.todo = todo
    console.info('>> selected Todo: ', this.todo)
  }
}
