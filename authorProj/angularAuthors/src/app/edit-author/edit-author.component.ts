import { HttpService } from "../http.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  editedAuthor = { name: "" };
  errors = [];
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ){}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this._httpService.getAuthor(params['authorId']).subscribe(data => {
        if (data["message"] === "error") { this.errors.push("That author Id does not exist") }
        else { this.editedAuthor = data['data']; }
      })
    });
  }

  // UPON SUBMISSION OF EDIT FORM, PASS EDITED author ALONG W/ ITS ID TO SERVICE
  onEdit() {
    this._httpService.putAuthor(this.editedAuthor["_id"], this.editedAuthor).subscribe(data => {
        if (data["message"] === "error") { this.errors.push(data["error"]) }
        else { 
            this.editedAuthor = {name: "" }; 
            this._router.navigate(["/all"]);
        }
    })
}

}
