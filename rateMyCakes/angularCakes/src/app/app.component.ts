import { Component, OnInit } from '@angular/core';
import { HttpService } from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
cakes = [];
newCake = {baker: "", url: ""}
selectedCake = null;
averageRating = 0;

  constructor(private _httpService: HttpService) {
  }
  
  ngOnInit() {
    this.getAllCakes()
  }

  displayCake(cakeIndex) {
    let counter = 0;
    for (let rating of this.cakes[cakeIndex]['ratings']) {
      this.averageRating += Number(rating['stars']);
      counter++
    }
    this.averageRating = this.averageRating / counter;
    this.selectedCake = this.cakes[cakeIndex];
    this.selectedCake.averageRating = this.averageRating;
  }

  getAllCakes() {
    this._httpService.getCakes().subscribe(data => {
      if (data['message'] === 'error') { console.log(data['error']) }
      else { this.cakes = data['data'] };
    })
  }

  createCake() {
    this._httpService.postCake(this.newCake).subscribe(data => {
      if (data['message'] === 'error') { console.log(data['error']) }
      else { this.getAllCakes(); this.newCake = {baker: "", url: ""}; };
    })
  }

  createRating(cakeIndex, formObj) {
    let rating = {
      stars: formObj.controls.stars.value,
      comment: formObj.controls.comment.value,
    }
    this.cakes[cakeIndex].ratings.push(rating)
    this._httpService.putCake(this.cakes[cakeIndex]).subscribe(data => {
      if (data['message'] === 'error') { console.log(data['error']) }
      else { this.getAllCakes(); };
    })
  }

}