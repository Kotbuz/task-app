import { Injectable, Service } from '@angular/core';






export interface TaskInterface {
    id: number;
    title: string;
    completed: boolean;
}





@Injectable({
    providedIn: 'root'
})
export class Task {
    private tasks: TaskInterface[] = [
        { id: 1, title: 'Проснуться', completed: false },
        { id: 2, title: 'Раздуплиться', completed: true },
    ];

    getTasks(): TaskInterface[] {
        return this.tasks
    }

    addTask(title: string): void {
        const newTask = {
            id: Date.now(),
            title: title,
            completed: false
        };
        this.tasks.push(newTask);
    }

    deleteTask(id: number): void {
        this.tasks = this.tasks.filter(t => t.id !== id);
    }

    changeTask(id: number): void {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = !task.completed;
        }
    }

}



