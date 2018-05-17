import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { HttpService } from "./http.service";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { AllAuthorsComponent } from './all-authors/all-authors.component';
import { AddAuthorComponent } from './add-author/add-author.component';
import { EditAuthorComponent } from './edit-author/edit-author.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
declarations: [
    AppComponent,
    AllAuthorsComponent,
    AddAuthorComponent,
    EditAuthorComponent,
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