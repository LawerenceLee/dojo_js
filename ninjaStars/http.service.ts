
    import { Injectable } from "@angular/core";
    import { HttpClient } from "@angular/common/http";

    @Injectable({
        providedIn: "root"
    })

    export class HttpService {

        constructor(private _http: HttpClient) {}

        getMessages() {
            return this._http.get("/server");
        }

        getMessage(messageId) {
            return this._http.get(`/server/${messageId}`)
        }

        postMessage(messageObj) {
            return this._http.post("/server", messageObj)
        }

        putMessage(messageId, messageObj) {
            return this._http.put(`/server/${messageId}`, messageObj)
        }
        
        deleteMessage(messageId) {
            return this._http.delete(`/server/${messageId}`)
        }

    }
    
