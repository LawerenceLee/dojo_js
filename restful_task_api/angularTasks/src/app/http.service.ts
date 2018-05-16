import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
   }

   getTasks() {
      return this._http.get('/tasks');
   }

   getTask(taskId) {
      return this._http.get(`/tasks/${taskId}`)
   }

   updateTask(taskId, taskObj) {
     return this._http.put(`/tasks/${taskId}`, taskObj)
   }
  
   deleteTask(taskId) {
     return this._http.delete(`/tasks/${taskId}`)
   }

   addTask(taskObj) {
     return this._http.post("/tasks", taskObj)
   }
}
