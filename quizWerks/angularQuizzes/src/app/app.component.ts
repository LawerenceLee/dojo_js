
    import { Component, OnInit } from "@angular/core";
    import { ActivatedRoute, Params, Router } from "@angular/router";
    import { HttpService } from "./http.service";

    @Component({
        selector: "app-root",
        templateUrl: "./app.component.html",
        styleUrls: ["./app.component.css"]
    })

    export class AppComponent implements OnInit{
        quizzes = [];
        editedQuiz = { };
        newQuiz = { };

        constructor(
            private _httpService: HttpService,
            private _route: ActivatedRoute,
            private _router: Router
        ){}

        ngOnInit() {
            this.getQuizzes()
        }

        // GET ALL quizzes
        getQuizzes() {
            this._httpService.getQuizzes().subscribe(data => {
                if (data["message"] === "error") { console.log(data["error"]) }
                else { this.quizzes = data["data"] };
            })
        }

        // AFTER SUMBIT, SEND NEW quiz TO SERVER TO BE CREATED
        onSubmit() {
            this._httpService.postQuiz(this.newQuiz).subscribe(data => {
                if (data["message"] === "error") { console.log(data["error"]) }
                else { this.getQuizzes(); this.newQuiz = { }; }
            })
        }

        // SET EDITEDquiz TO THE quiz INDEX PASSED
        editQuiz(quizIndex) {
            this.editedQuiz = this.quizzes[quizIndex];
        }

        // UPON SUBMISSION OF EDIT FORM, PASS EDITED quiz ALONG W/ ITS ID TO SERVICE
        onEdit() {
            this._httpService.putQuiz(this.editedQuiz["_id"], this.editedQuiz).subscribe(data => {
                if (data["message"] === "error") { console.log(data["error"]) }
                else { this.getQuizzes(); this.editedQuiz = { }; }
            })
        }

        // UPON CLICKING THE DELETE BUTTON, SEND _ID OF quiz TO SERVICE
        onDelete(quizIndex) {
            this._httpService.deleteQuiz(this.quizzes[quizIndex]["_id"]).subscribe(data => {
                if (data["message"] === "error") { console.log(data["error"]) }
                else { this.getQuizzes(); }
            })
        }

    }

   