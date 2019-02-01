import { Component, OnInit } from '@angular/core';

import { LoginService, LoginUser } from './login.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: LoginUser;
  errormsg: string;

  values: any;
  constructor(private router: Router, private loginservice: LoginService) {}

  ngOnInit() {}
  async login(f: NgForm) {
    const loginkey = await this.loginservice.login(f.value).toPromise();
    // console.log(loginsdetails.json());
    // const key = loginsdetails.json();

    // this.loginservice.login(f.value).subscribe(success => {},failure => {});
    if (loginkey === 0) {
      // 0 for invalid user
      this.errormsg = 'Enter valid credintials';
      return;
    } else if (loginkey === 2) {
      // 2 for admin
      this.router.navigate(['dashboard']);
    } else {
      // 1 for user
      this.router.navigate(['exam']);
    }
  }
}
