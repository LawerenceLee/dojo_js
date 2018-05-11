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
    //  tempObservable.subscribe(data => console.log("Got our tasks!", data));
   }

   getTask(taskId) {
      return this._http.get(`/tasks/${taskId}`)
    //  tempObservable.subscribe(data => console.log("Got our task!", data));
   }
}
