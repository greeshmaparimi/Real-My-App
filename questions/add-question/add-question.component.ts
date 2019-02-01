import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/question';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {
  qname = ' ';
  opt1 = ' ';
  opt2 = ' ';
  opt3 = ' ';
  opt4 = ' ';
  copt = ' ';
  question = new Question('', '', '', '', '', '');

  constructor(private questionservice: QuestionsService) {}

  ngOnInit() {}
  addQuestion() {
    console.log(this.question.qname);
    this.questionservice.addQuestion(this.question).subscribe();
    this.question.qname = null;
    this.question.opt1 = null;
    this.question.opt2 = null;
    this.question.opt3 = null;
    this.question.opt4 = null;
    this.question.copt = null;
  }
}
