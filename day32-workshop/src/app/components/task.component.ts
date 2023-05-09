import { Component, Input, OnInit, Output, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Task, Todo } from '../models';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input()
  todo: Todo | null = null

  @Output()
  onNewTask = new Subject<Todo>()

  fb = inject(FormBuilder)

  todoForm!: FormGroup
  taskArr!: FormArray

  ngOnInit(): void {
    console.info('>>> todo: ', this.todo)
    this.todoForm = this.createTodo(this.todo)
  }

  addTask() {
    this.taskArr.push(this.createTask(null))
  }
  removeTask(i: number) {
    this.taskArr.removeAt(i)
  }

  processTask() {
    const todo = this.todoForm.value as Todo
    this.onNewTask.next(todo)
    this.todoForm = this.createTodo(null)
  }

  private createTasks(tasks: Task[]): FormArray {
    return this.fb.array(
      tasks.map(t => this.createTask(t))
    )
  }

  private createTask(t: Task | null): FormGroup {
    return this.fb.group({
      task: this.fb.control<string>(!!t? t.task: ''),
      priority: this.fb.control<string>(!!t? t.priority: ''),
      dueDate: this.fb.control<string>(!!t? t.dueDate: '')
    })
  }

  private createTodo(t: Todo | null): FormGroup {
    this.taskArr = this.createTasks(!!t? t.tasks: [])
    return this.fb.group({
      title: this.fb.control<string>((!!t)? t.title: ''),
      name: this.fb.control<string>(!!t? t.name: ''),
      tasks: this.taskArr
    })
  }

}
