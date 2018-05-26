import { HttpService } from "../http.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
  newAuthor = { name: "" };
  errors = [];
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ){}

  ngOnInit() {
  }

      // AFTER SUMBIT, SEND NEW author TO SERVER TO BE CREATED
  onSubmit() {
    this._httpService.postAuthor(this.newAuthor).subscribe(data => {
        if (data["message"] === "error") { this.errors.push(data["error"]) }
        else { 
          this.newAuthor = { name: "" }; 
          this._router.navigate(['/all']);
        }
    })
  }

}
