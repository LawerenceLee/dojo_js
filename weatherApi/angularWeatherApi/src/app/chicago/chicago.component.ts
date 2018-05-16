import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  city = "Chicago, IL"
  apiParam = "60611,us"
  humidity = "";
  tempAve = "";
  tempHi = "";
  tempLow = "";
  status = "";
  url = "https://images.pexels.com/photos/1036657/pexels-photo-1036657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
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
