import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from "./http.service";
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddQuizComponent } from './add-quiz/add-quiz.component';
import { AllQuizzesComponent } from './all-quizzes/all-quizzes.component';
import { ShowQuizComponent } from './show-quiz/show-quiz.component';
import { QuestionFormComponent } from './show-quiz/question-form/question-form.component';
import { EditQuizMetadataComponent } from './show-quiz/edit-quiz-metadata/edit-quiz-metadata.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    AddQuizComponent,
    AllQuizzesComponent,
    ShowQuizComponent,
    QuestionFormComponent,
    EditQuizMetadataComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
