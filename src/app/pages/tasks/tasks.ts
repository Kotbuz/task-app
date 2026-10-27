import { Component } from '@angular/core';
import { Task, TaskInterface } from '../../services/task';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-tasks',
  styleUrl: './tasks.css',
  templateUrl: './tasks.html',
})
export class Tasks {
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
