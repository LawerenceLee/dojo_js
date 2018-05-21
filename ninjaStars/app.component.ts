
    import { HttpService } from "./http.service";
    import { Component, OnInit } from "@angular/core";
    import { ActivatedRoute, Params, Router } from "@angular/router";

    @Component({
        selector: "app-root",
        templateUrl: "./app.component.html",
        styleUrls: ["./app.component.css"]
    })
    export class AppComponent implements OnInit{
        messages = [];
        editedMessage = { };
        newMessage = { };

        constructor(
            private _httpService: HttpService,
            private _route: ActivatedRoute,
            private _router: Router
        ){}

        ngOnInit() {
            this.getMessages()
        }

        // GET ALL messages
        getMessages() {
            this._httpService.getMessages().subscribe(data => {
                if (data["message"] === "error") { console.log(data["error"]) }
                else { this.messages = data["data"] };
            })
        }

        // AFTER SUMBIT, SEND NEW message TO SERVER TO BE CREATED
        onSubmit() {
            this._httpService.postMessage(this.newMessage).subscribe(data => {
                if (data["message"] === "error") { console.log(data["error"]) }
                else { this.getMessages(); this.newMessage = { }; }
            })
        }

        // SET EDITEDmessage TO THE message INDEX PASSED
        editMessage(messageIndex) {
            this.editedMessage = this.messages[messageIndex];
        }

        // UPON SUBMISSION OF EDIT FORM, PASS EDITED message ALONG W/ ITS ID TO SERVICE
        onEdit() {
            this._httpService.putMessage(this.editedMessage["_id"], this.editedMessage).subscribe(data => {
                if (data["message"] === "error") { console.log(data["error"]) }
                else { this.getMessages(); this.editedMessage = { }; }
            })
        }

        // UPON CLICKING THE DELETE BUTTON, SEND _ID OF message TO SERVICE
        onDelete(messageIndex) {
            this._httpService.deleteMessage(this.messages[messageIndex]["_id"]).subscribe(data => {
                if (data["message"] === "error") { console.log(data["error"]) }
                else { this.getMessages(); }
            })
        }

    }

    

    import { BrowserModule } from "@angular/platform-browser";
    import { NgModule } from "@angular/core";
    import { HttpClientModule } from "@angular/common/http";
    import { HttpService } from "./http.service";
    import { FormsModule } from "@angular/forms";
    import { AppRoutingModule } from ./app-routing.module;

    import { AppComponent } from "./app.component";

    @NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [HttpService],
    bootstrap: [AppComponent]
    })
    export class AppModule { }
    
