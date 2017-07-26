import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from "app/auth/account.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') login: NgForm;

  constructor(private accountService: AccountService, private route: Router) { }

  ngOnInit() {
  }

  onLogin() {
    let user: { email: string, password: string, firstName: string, lastName: string, gender: string, age: number } = {
      email: this.login.value.email,
      password: this.login.value.password,
      firstName: '',
      lastName: '',
      gender: '',
      age: 0
    };

    this.accountService.loginUser(user).subscribe(
      (response) => {
        let data = response.json();
        this.accountService.loggedInUser.id_user = data[0];
        this.accountService.loggedInUser.email = data[1];
        this.accountService.loggedInUser.firstName = data[2];
        this.accountService.loggedInUser.lastName = data[3];
        this.accountService.loggedInUser.age = data[4];
        this.accountService.loggedInUser.gender = data[5];
        console.log(this.accountService.loggedInUser);
        this.accountService.setUserLoggedIn();
        this.route.navigate(['account']);
      },
      (err) => console.log(err)
    );
  }


}
