import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') login: NgForm;

  constructor() { }

  ngOnInit() {
  }

  onLogin() {
    console.log(this.login);
    this.login.reset();
  }

}
