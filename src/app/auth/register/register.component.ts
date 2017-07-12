import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { FormGroup }  from '@angular/forms';

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
  pwd = '';

  constructor() { }

  ngOnInit() {
    
  }

  onSubmit() {
    console.log(
      this.signUp.value.email + ' ' +
      this.signUp.value.pwd + ' ' +
      this.signUp.value.secret + ' ' +
      this.signUp.value.QA + ' ' + 
      this.signUp.value.gender
    );
   
  }
}
