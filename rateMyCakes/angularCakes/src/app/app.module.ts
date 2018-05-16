import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from "./http.service";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CakeDispComponent } from './cake-disp/cake-disp.component';

@NgModule({
  declarations: [
    AppComponent,
    CakeDispComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
