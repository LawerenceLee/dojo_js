import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getWeather(apiParam) {
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${apiParam}&units=metric&APPID=2c38e210b9c25c7061b88babb251f32b`)
  }
    
}
