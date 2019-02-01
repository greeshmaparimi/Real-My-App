import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo, User } from '../user';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TestService {
  constructor(private http: HttpClient) {}

  retrieveAll(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8080/users');
  }

  addUser(user: Todo): Observable<any> {
    const body = JSON.stringify(user);
    return this.http.post('http://localhost:8080/users/add', body);
  }

  public deleteUser(emailid: String): Observable<any> {
    console.log(emailid);
    const body = JSON.stringify(emailid);
    console.log(body);

    return this.http.delete('http://localhost:8080/users/delete/' + emailid);
  }
}
