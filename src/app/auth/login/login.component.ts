import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceLogin } from "app/auth/login/service.login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') login: NgForm;

  constructor(private loginService: ServiceLogin, private route: Router) { }

  ngOnInit() {
  }

  onLogin() {
     let user: {email: string, password: string, firstName: string, lastName: string, gender: string, age: number} = {
      email: this.login.value.email,
      password: this.login.value.password,
      firstName: 'sample',
      lastName: 'sample',
      gender: 'sample',
      age: 0
    };

   
    this.loginService.loginUser(user).subscribe(
      (response) => {
        console.log(response + " successssss");
      },
      (err) => console.log(err)
    );
  }

}
