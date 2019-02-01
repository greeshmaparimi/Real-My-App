import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { TestSettings } from '../testsettings';

import { Observable } from 'rxjs';
import { Question } from '../question';
import {
  HttpClient,
  HttpHeaders,
  HttpEvent,
  HttpResponse
} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  constructor(private http: HttpClient) {}
  retrieveAll(): Observable<Question[]> {
    return this.http.get<Question[]>('http://localhost:8080/display-questions');
  }
  addQuestion(question: Question): Observable<any> {
    console.log(question.qname);
    const body = JSON.stringify(question);
    console.log(body);

    return this.http.post('http://localhost:8080/addquestion', body);
  }
  public deleteQuestion(qid: number): Observable<any> {
    console.log(qid);
    return this.http.delete('http://localhost:8080/deletequestion/' + qid);
  }
  public testSettings(testsettings: TestSettings): Observable<any> {
    console.log('this is working 1');
    const body = JSON.stringify(testsettings);
    console.log('this is working 2');
    // const body = temp.toString();
    console.log(testsettings);
    console.log(typeof (JSON.stringify(body)));

    console.log(typeof body);
   // let headers = new Headers({ 'Content-Type': 'application/json' });
   // let options = new RequestOptions({ headers: headers });
    return this.http.put('http://localhost:8080/testsettings', body);
  }
}
