import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

import { Task } from '../../Tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  tasks: Array<Task> = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    console.log('hey', this.tasks);
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(taskId: string) {
    this.taskService
      .deleteTask(taskId)
      .subscribe(
        () => (this.tasks = this.tasks.filter((task) => task.id != taskId))
      );
  }

  toggleReminder(task: Task) {
    const updatedTask: Task = {
      ...task,
      reminder: !task.reminder,
    };
    task.reminder = !task.reminder;
    this.taskService.updateTask(updatedTask).subscribe();
  }

  addNewTask(task: Task) {
    this.taskService.createTask(task).subscribe(() => this.tasks.push(task));
  }
}
