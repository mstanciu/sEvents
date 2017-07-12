import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') login: NgForm;

  constructor(private route: Router) { }

  ngOnInit() {
  }

  onLogin() {
    console.log(this.login);
    this.login.reset();
    this.route.navigate(['account']);
  }

}
