import { Component, OnInit } from '@angular/core';
import { ROUTER_CONFIGURATION } from '@angular/router';
import { Todo } from '../user';
import { Router } from '@angular/router';
import { TestService } from './test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  emailid = ' ';
  password = ' ';
  username = ' ';
  phnnum = ' ';
  gender = ' ';
  user = new Todo('', '', '', '', 'male');

  users: Todo[];
  constructor(private router: Router, private testservice: TestService) {}
  retrieveAll(): void {
    this.testservice.retrieveAll().subscribe(
      userdata => {
        (this.users = userdata), console.log(userdata);
      },
      error => {
        console.log(error);
      }
    );
  }
  async addUser() {
    const key1 = await this.testservice.addUser(this.user).toPromise();
    // console.log(key1);
    // const msg = key1.json();
    // console.log(typeof key1);

    if (key1 === 0) {
      alert('Account already exists with the given emailid');
      // const msg1 = 'already exsist';
    } else {
      alert('Registration Successful');
      this.router.navigate(['login']);
    }
  }
  ngOnInit() {
    this.retrieveAll();
  }

  callbutton(data: any) {
    window.alert(data || 'hello');
    // this.router.navigateByUrl('/question');
  }
}
