import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private httpservice: HttpClient) {}
  login(login: LoginUser): Observable<any> {
    const body = JSON.stringify(login);
    console.log(typeof body);
    return this.httpservice.post('http://localhost:8080/users/login', body);
  }
}

export interface LoginUser {
  emailid: string;
  password: string;
}
