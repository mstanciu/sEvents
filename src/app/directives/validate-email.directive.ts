import { Directive } from '@angular/core';
import { NG_VALIDATORS } from "@angular/forms";
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

export function emailValidationFunction(control: FormControl) {
  console.log('aiciiiiiiii');
  console.log(control.errors);
  let email = control.value;
  if(email && email.indexOf('@') != -1) {
    let [_, domain] = email.split('@');
    if(domain !== 'gmail.com') {
      return {
        validateEmail: {
          parsedDomain: domain
        }
      }
    }
  }
  return null;
}

@Directive({
  selector: '[validateEmail][ngModel]',
  providers: [{
    provide: NG_VALIDATORS,
    useValue: emailValidationFunction,
    multi: true
  }
  ]
})
export class ValidateEmailDirective {

  constructor() { }

  

}
