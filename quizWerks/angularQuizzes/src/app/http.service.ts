
    import { Injectable } from "@angular/core";
    import { HttpClient } from "@angular/common/http";

    @Injectable({
        providedIn: "root"
    })

    export class HttpService {

        constructor(private _http: HttpClient) {}

        getQuizzes() {
            return this._http.get("/quizzes");
        }

        getQuiz(quizId) {
            return this._http.get(`/quizzes/${quizId}`)
        }

        postQuiz(quizObj) {
            return this._http.post("/quizzes", quizObj)
        }

        putQuiz(quizId, quizObj) {
            return this._http.put(`/quizzes/${quizId}`, quizObj)
        }
        
        deleteQuiz(quizId) {
            return this._http.delete(`/quizzes/${quizId}`)
        }

    }
    
