import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceLogin {

    constructor(private http: Http) {}

    loginUser(user:{email: string, password: string, firstName: string, lastName: string, gender: string, age: number}) {
        return this.http.post('http://localhost:8080/sEvents/login/login',user);
    }
}