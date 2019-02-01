import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TestService } from 'src/app/test/test.service';
import { Todo } from 'src/app/user';

@Component({
  selector: 'app-user-details-display',
  templateUrl: './user-details-display.component.html',
  styleUrls: ['./user-details-display.component.scss']
})
export class UserDetailsDisplayComponent implements OnInit {
  constructor(
    private router: Router,
    private r: ActivatedRoute,
    private testservice: TestService
  ) {}

  users: Todo[];

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

  deleteUser(user: { emailid: String }) {
    console.log(user.emailid);
    this.testservice.deleteUser(user.emailid).subscribe(
      success => {
        this.retrieveAll();
      },
      failure => {}
    );

    // this.router.navigate(['user-details-display']);
    //  this.retrieveAll();
  }

  ngOnInit() {
    this.retrieveAll();
  }
}
