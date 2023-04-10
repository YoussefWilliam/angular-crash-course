import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Task } from '../Tasks';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:3001/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Array<Task>> {
    // const tasks = of(TASKS);
    // return tasks;
    return this.http.get<Array<Task>>(this.apiUrl);
  }

  deleteTask(taskId: string): Observable<Task> {
    const url = `${this.apiUrl}/${taskId}`;
    return this.http.delete<Task>(url);
  }

  updateTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, httpOptions);
  }
}
