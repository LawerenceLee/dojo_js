import { HttpService } from "../http.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from '@angular/router';
// import { AppComponent } from "../app.component"

@Component({
  selector: 'app-all-quizzes',
  templateUrl: './all-quizzes.component.html',
  styleUrls: ['./all-quizzes.component.css']
})
export class AllQuizzesComponent implements OnInit {
  quizzes: any[];
  errors = [];

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._httpService.getQuizzes().subscribe(data => {
      if (data["message"] === "error") { 
        for (let err of data['error']) {
          this.errors.push(err);
        }
      }
      else { this.quizzes = data["data"] };
    })
  }

  showQuiz(quizId) {
    this._router.navigate([`/show/${quizId}`])
  }

}
