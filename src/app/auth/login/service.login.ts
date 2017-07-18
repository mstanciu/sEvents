import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceLogin {

    constructor(private http: Http) {}

    loginUser(user) {
        return this.http.get('http://localhost:8080/sEvents/login');
    }
}