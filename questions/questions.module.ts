import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { AddQuestionComponent } from './add-question/add-question.component';
import { DeleteQuestionComponent } from './delete-question/delete-question.component';
import { QuestionSettingsComponent } from './question-settings/question-settings.component';
import { QuestionsComponent } from './questions/questions.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddQuestionComponent, DeleteQuestionComponent, QuestionSettingsComponent, QuestionsComponent],
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    FormsModule
  ]
})
export class QuestionsModule { }
