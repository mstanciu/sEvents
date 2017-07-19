import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiceAccount {

    private loggedIn: boolean = false;
    
    constructor() {}

    isLoggedIn() {
        return this.loggedIn;
    }

    loginUser() {
        this.loggedIn = true;
    }

    logoutUser() {
        this.loggedIn = false;
    }

}