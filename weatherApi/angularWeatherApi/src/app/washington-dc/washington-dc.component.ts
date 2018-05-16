import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-washington-dc',
  templateUrl: './washington-dc.component.html',
  styleUrls: ['./washington-dc.component.css']
})
export class WashingtonDCComponent implements OnInit {
  city = "Washington D.C."
  apiParam = "20015,us"
  humidity = "";
  tempAve = "";
  tempHi = "";
  tempLow = "";
  status = "";
  url = "https://images.pexels.com/photos/129112/pexels-photo-129112.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
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
