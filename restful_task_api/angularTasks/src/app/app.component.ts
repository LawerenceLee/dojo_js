import { HttpService } from "./http.service";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  tasks = [];
  editedTask = { title: "", desc: ""};
  newTask = { title: "", desc: ""};

  constructor(private _httpService: HttpService){
  }

  ngOnInit() {
    this.getTasksFromService()
  }

  editTask(taskIndex) {
    this.editedTask = this.tasks[taskIndex];
  }

  onDelete(taskIndex) {
    this._httpService.deleteTask(this.tasks[taskIndex]["_id"]).subscribe(data => {
      if (data['message'] === 'error') { console.log(data['error']) }
      else { this.getTasksFromService(); }
    })
  }

  onEdit() {
    this._httpService.updateTask(this.editedTask["_id"], this.editedTask).subscribe(data => {
      if (data['message'] === 'error') { console.log(data['error']) }
      else { this.getTasksFromService(); this.editedTask = { title: "", desc: "" }; }
    })
  }


  onSubmit() {
    this._httpService.addTask(this.newTask).subscribe(data => {
      if (data['message'] === 'error') { console.log(data['error']) }
      else { this.getTasksFromService(); this.newTask = { title: "", desc: "" }; }
    })
  }

  getTasksFromService() {
    this._httpService.getTasks().subscribe(data => {
      if (data['message'] === 'error') { console.log(data['error']) }
      else { this.tasks = data['data'] };
    })
  }

}
