import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/question';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-delete-question',
  templateUrl: './delete-question.component.html',
  styleUrls: ['./delete-question.component.scss']
})
export class DeleteQuestionComponent implements OnInit {
 // question = new Question('', '', '', '', '', '');

  questions: Question[];
  constructor(private questionservice: QuestionsService) {}
  retrieveAll(): void {
    this.questionservice.retrieveAll().subscribe(
      questionsdata => {
        (this.questions = questionsdata), console.log(questionsdata);
      },
      error => {
        console.log(error);
      }
    );
  }


  ngOnInit() {
    this.retrieveAll();
  }
  deleteQuestion(questions) {
    console.log(questions.qid);
    this.questionservice.deleteQuestion(questions.qid).subscribe(
      success => {
        this.retrieveAll();
      },
      failure => {}
    );
  }
}
