import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { FormGroup }  from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';
import { Router } from "@angular/router";
import {AccountService} from '../account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  @ViewChild('f') signUp: NgForm;
  signUpGroup: FormGroup;
  answer = '';
  genders = ['Male','Female'];
  password = '';

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit() {
    
  }

  onSubmit() {

    let user: {email: string, password: string, firstName: string, lastName: string, gender: string, age: number} = {
      email: this.signUp.value.email,
      password: this.signUp.value.password,
      firstName: 'sample',
      lastName: 'sample',
      gender: this.signUp.value.gender,
      age: 0
    };

    this.accountService.registerUser(user).subscribe(
        (response) => {
          console.log(response);
          this.signUp.reset();
          this.router.navigate['login'];
        },
        (err) => console.log(err)
    );
  }

  navigateToLogin() {
    this.signUp.reset();
    this.router.navigate(['login']);
  }
}
