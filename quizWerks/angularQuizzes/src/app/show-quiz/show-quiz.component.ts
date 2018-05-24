import { HttpService } from "../http.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-show-quiz',
  templateUrl: './show-quiz.component.html',
  styleUrls: ['./show-quiz.component.css']
})
export class ShowQuizComponent implements OnInit {
  errors: any[];
  workingQuestion = {
    editing: false,
    formType: "",
    questIdx: 0,
    question: "",
    correctAnswer: "",
    altAnswer1: "",
    altAnswer2: "",
    altAnswer3: "",
  }
  quiz = {
    category: [],
    questions: [{}],
    title: "",
    desc: "",
    questionCount: 0
  }
  workingQuizMetadata = {
    editing: false,
    title: "",
    desc: "",
  }
  
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this._httpService.getQuiz(params['quizId'])
        .subscribe(data => {
          if (data["message"] === "error") { this.errors.push("That quiz Id does not exist") }
          else { this.quiz = data['data']; }
        })
    });
  }

  setupQuizMetadataEdit() {
    this.workingQuizMetadata.title = this.quiz.title;
    this.workingQuizMetadata.desc = this.quiz.desc;
    this.workingQuizMetadata.editing = true;
  }

  openCreateForm() {
    this.workingQuestion.editing = true;
    this.workingQuestion.questIdx = 0;
    this.workingQuestion.question = "";
    this.workingQuestion.correctAnswer = "";
    this.workingQuestion.altAnswer1 = "";
    this.workingQuestion.altAnswer2 = "";
    this.workingQuestion.altAnswer3 = "";
    this.workingQuestion.formType = "Create Question";
  }

  toEditForm(questIdx) {
    this.workingQuestion.editing = true;
    this.workingQuestion.questIdx = questIdx;
    this.workingQuestion.question = this.quiz.questions[questIdx]['question'];
    this.workingQuestion.correctAnswer = this.quiz.questions[questIdx]['correctAnswer'];
    this.workingQuestion.altAnswer1 = this.quiz.questions[questIdx]['altAnswer1'];
    this.workingQuestion.altAnswer2 = this.quiz.questions[questIdx]['altAnswer2'];
    this.workingQuestion.altAnswer3 = this.quiz.questions[questIdx]['altAnswer3'];
    this.workingQuestion.formType = "Edit Question";
  }

  deleteQuestion(questionIndex) {
    this.quiz.questions.splice(questionIndex, 1)
    this._httpService.putQuiz(this.quiz['_id'], this.quiz)
      .subscribe(data => {
        if (data["message"] === "error") { 
          this.errors = data['error'];
        }
        else { 
          this.quiz = data['data'];
        }
      })
  }


}
