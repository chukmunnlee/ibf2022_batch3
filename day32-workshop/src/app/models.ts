export interface Task {
  task: string
  priority: string
  dueDate: string
}

export interface Todo {
  title: string
  name: string
  tasks: Task[]
}
