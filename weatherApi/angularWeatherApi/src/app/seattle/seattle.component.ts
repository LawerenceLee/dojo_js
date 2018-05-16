import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  city = "Seattle, WA"
  apiParam = "98101,us"
  humidity = "";
  tempAve = "";
  tempHi = "";
  tempLow = "";
  status = "";
  url = "https://images.pexels.com/photos/462370/pexels-photo-462370.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this._httpService.getWeather(this.apiParam).subscribe(data => {
      this.humidity = data['main']['humidity'];
      this.tempAve = data['main']['temp'];
      this.tempHi = data['main']['temp_max'];
      this.tempLow = data['main']['temp_min'];
      this.status = data['weather'][0]['description'];
    })
  }

}
