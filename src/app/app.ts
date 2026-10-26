import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskInterface, Task } from './services/task';

@Component({
  imports: [RouterOutlet, FormsModule, CommonModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  tasks: TaskInterface[] = [];
  newTaskTitle: string = '';


  constructor(private taskService: Task) {
    this.loadTasks();
  }
  loadTasks(): void {
    this.tasks = this.taskService.getTasks();
  }
  addNewTask(): void {
    if (this.newTaskTitle.trim()) {
      this.taskService.addTask(this.newTaskTitle);
      this.loadTasks();
      this.newTaskTitle = ''
    }
  }
  removeTask(id: number): void {
    this.taskService.deleteTask(id);
    this.loadTasks();
  }
  changeTaskStatus(id: number): void {
    this.taskService.changeTask(id);
    this.loadTasks();

  }

}
