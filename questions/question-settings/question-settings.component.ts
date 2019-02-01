import { Component, OnInit } from '@angular/core';
import {TestSettings} from 'src/app/testsettings';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-question-settings',
  templateUrl: './question-settings.component.html',
  styleUrls: ['./question-settings.component.scss']
})
export class QuestionSettingsComponent implements OnInit {

  constructor(private questionsservice: QuestionsService) { }
  testsettings = new TestSettings(null, null, null);
  ngOnInit() {
  }
  test_settings() {
    console.log(this.testsettings);
    this.questionsservice.testSettings(this.testsettings).subscribe(
      success => {},
      failure => {},
    );
}
}
