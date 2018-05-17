import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddAuthorComponent } from "./add-author/add-author.component";
import { EditAuthorComponent } from "./edit-author/edit-author.component";
import { AllAuthorsComponent } from "./all-authors/all-authors.component";
const routes: Routes = [
  { path: 'new', component: AddAuthorComponent },
  { path: 'edit/:authorId', component: EditAuthorComponent },
  { path: 'all', component: AllAuthorsComponent },
  { path: '', pathMatch: 'full', redirectTo: "/all" },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
