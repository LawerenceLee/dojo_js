import { HttpService } from "../http.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AppComponent } from "../app.component"

@Component({
  selector: 'app-all-authors',
  templateUrl: './all-authors.component.html',
  styleUrls: ['./all-authors.component.css']
})
export class AllAuthorsComponent implements OnInit {
  authors = []
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _appComponent: AppComponent,
  ) { }

  ngOnInit() {
    this.getAuthors()
  }

  toEditRoute(authorId) {
    this._router.navigate([`/edit/${authorId}`])
  }

  getAuthors() {
    this._httpService.getAuthors().subscribe(data => {
        if (data["message"] === "error") { console.log(data["error"]) }
        else { this.authors = data["data"] };
    })
  }

  // UPON CLICKING THE DELETE BUTTON, SEND _ID OF author TO SERVICE
  onDelete(authorId) {
    this._httpService.deleteAuthor(authorId).subscribe(data => {
        if (data["message"] === "error") { console.log(data["error"]) }
        else { this.getAuthors(); }
    })
  }

}
