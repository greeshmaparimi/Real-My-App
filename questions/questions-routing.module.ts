import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { DeleteQuestionComponent } from './delete-question/delete-question.component';
import { QuestionSettingsComponent } from './question-settings/question-settings.component';

const routes: Routes = [
  {
    path: 'questions',
    component: QuestionsComponent,
    children: [
      { path: 'add-question', component: AddQuestionComponent },
      { path: 'delete-question', component: DeleteQuestionComponent },
      { path: 'question-settings', component: QuestionSettingsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsRoutingModule {}
