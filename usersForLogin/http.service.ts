
    import { Injectable } from "@angular/core";
    import { HttpClient } from "@angular/common/http";

    @Injectable({
        providedIn: "root"
    })

    export class HttpService {

        constructor(private _http: HttpClient) {}

        getUsers() {
            return this._http.get("/users");
        }

        getUser(userId) {
            return this._http.get(`/users/${userId}`)
        }

        postUser(userObj) {
            return this._http.post("/users", userObj)
        }

        putUser(userId, userObj) {
            return this._http.put(`/users/${userId}`, userObj)
        }
        
        deleteUser(userId) {
            return this._http.delete(`/users/${userId}`)
        }

    }
    
