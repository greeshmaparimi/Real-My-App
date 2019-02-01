import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import { ExamComponent } from './exam/exam.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { QuestionsComponent } from './questions/questions/questions.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: TestComponent },
  { path: 'questions', component: QuestionsComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'exam', component: ExamComponent },
//  { path: '***', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
