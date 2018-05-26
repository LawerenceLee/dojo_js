import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddQuizComponent } from "./add-quiz/add-quiz.component";
import { AllQuizzesComponent } from "./all-quizzes/all-quizzes.component";
import { ShowQuizComponent } from "./show-quiz/show-quiz.component";
import { RegistrationComponent } from "./registration/registration.component"

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'new', component: AddQuizComponent },
  { path: 'show/:quizId', component: ShowQuizComponent },
  { path: 'all', component: AllQuizzesComponent },
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
