import { HttpService } from "./http.service";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MEAN';
  tasks = [];
  showTask = ""; 
  constructor(private _httpService: HttpService){}

  ngOnInit() {
    // this.getTasksFromService()
  }
  showDesc(event) {
    
    let taskItem = event.target.previousElementSibling.innerText
    console.log(taskItem)
    for (let task of this.tasks) {
      if (task.title === taskItem) {
        this.showTask = task;
      }
    }
  }

  getTasksFromService() {
    let observable = this._httpService.getTasks()
    observable.subscribe(data => {
      console.log("Got our data!", data);
      this.tasks = data['tasks'];
    })
  }

}
