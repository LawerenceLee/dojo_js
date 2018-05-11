import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getTasks();
    this.getTask('5af4bb3a74a67712dbab70dd');
   }

   getTasks() {
     let tempObservable = this._http.get('/tasks');
     tempObservable.subscribe(data => console.log("Got our tasks!", data));
   }

   getTask(taskId) {
     console.log('taks')
     let tpObservable = this._http.get(`/tasks/${taskId}`)
     tpObservable.subscribe(data => console.log("Got our task!", data));
   }
}
