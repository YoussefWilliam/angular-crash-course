import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from 'src/app/Tasks';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task: Task = {
    text: '',
    id: '',
    day: '',
    reminder: false,
  };
  faTimes = faTimes;
  @Output() onDeleteTask: EventEmitter<string> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  onDelete(taskId: string) {
    this.onDeleteTask.emit(taskId);
  }

  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }
}
