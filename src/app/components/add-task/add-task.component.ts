import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Task } from 'src/app/Tasks';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  onSubmit() {
    if (!this.text || !this.day) {
      alert('Please finish the needed data to create a task');
      return;
    }

    const newTask = {
      id: (Math.random() * 100).toString(),
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);
  }
}
