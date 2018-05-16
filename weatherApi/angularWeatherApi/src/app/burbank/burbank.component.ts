import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  city = "Burbank, CA"
  apiParam = "91501,us"
  humidity = "";
  tempAve = "";
  tempHi = "";
  tempLow = "";
  status = "";
  url = "https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1508470418000/photosp/bd509604-ac4a-4441-b215-64e553bcdff1/stock-photo-photography-travel-shopping-california-lifestyle-los-angeles-amazing-dining-burbank-bd509604-ac4a-4441-b215-64e553bcdff1.jpg";

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
