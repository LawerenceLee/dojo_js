import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})

export class HttpService {

    constructor(private _http: HttpClient) {}

    getAuthors() {
        return this._http.get("/authors");
    }

    getAuthor(authorId) {
        return this._http.get(`/authors/${authorId}`)
    }

    postAuthor(authorObj) {
        return this._http.post("/authors", authorObj)
    }

    putAuthor(authorId, authorObj) {
        return this._http.put(`/authors/${authorId}`, authorObj)
    }
    
    deleteAuthor(authorId) {
        return this._http.delete(`/authors/${authorId}`)
    }

}