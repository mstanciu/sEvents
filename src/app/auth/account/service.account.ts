import { Http,Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceAccount {

    private loggedIn: boolean = false;
    
    constructor(private http: Http) {}

    isLoggedIn() {
        return this.loggedIn;
    }

    loginUser() {
        this.loggedIn = true;
    }

    logoutUser() {
        this.loggedIn = false;
    }

    getEvents() {
        this.http.get('http://localhost:8080/sEvents/account/events').subscribe(
            (response) => {
                    console.log(response.json);
            },
            (err) => {
                console.log(err);
            }
        );
    }

}