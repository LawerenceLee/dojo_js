import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  city = "San Jose, CA"
  apiParam = "95103,us"
  humidity = "";
  tempAve = "";
  tempHi = "";
  tempLow = "";
  status = "";
  url = "https://images.pexels.com/photos/462331/pexels-photo-462331.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350";
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
