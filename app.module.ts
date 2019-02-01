import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { RouterModule, Routes } from '@angular/router';
import { TestService } from './test/test.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ExamComponent } from './exam/exam.component';
import { BsDropdownModule } from 'ngx-bootstrap';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AdminModule } from './admin/admin.module';
import { QuestionsModule } from './questions/questions.module';
import { LoginService } from './login/login.service';
import { QuestionsService } from './questions/questions.service';
import { HeaderInterceptor } from './shared/header-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LoginComponent,
    PageNotFoundComponent,
    ExamComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    NgbModule,
    AdminModule,
    QuestionsModule,

    BsDropdownModule.forRoot()
  ],
  providers: [
    TestService,
    LoginService,
    QuestionsService,
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
