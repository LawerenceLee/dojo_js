import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { HttpService } from "../http.service";
import { NgForm } from "@angular/forms"

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  errors: any[];
  user = {
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };

  constructor(
      private _httpService: HttpService,
      private _route: ActivatedRoute,
      private _router: Router){}

  ngOnInit() {
  }

  createUser(registerForm: NgForm) {
    this.errors = [];
    if (this.user.password !== this.user.passwordConfirm) {
      this.errors.push("Password and Confirm Password field must match")
      this.user.password = "";
      this.user.passwordConfirm = "";
    }
    if (registerForm.invalid) { 
      return;
    }
    else {
      this._httpService.postUser(this.user)
        .subscribe(data => {
          if (data['message'] === 'error') { this.errors.push(data['error'])}
          else {
            this._router.navigate(["/all"])
          }
        })
    }
  }

}
