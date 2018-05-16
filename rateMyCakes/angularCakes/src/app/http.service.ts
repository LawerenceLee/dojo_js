import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getCakes() {
    return this._http.get("/cakes")
  }

  postCake(cakeObj) {
    return this._http.post("/cakes", cakeObj)
  }

  putCake(cakeObj) {
    let cakeId = cakeObj._id
    return this._http.put(`/cakes/${cakeId}`, cakeObj)
  }
}
