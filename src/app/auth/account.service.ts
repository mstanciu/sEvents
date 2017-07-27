import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";

@Injectable()
export class AccountService {

    loggedInUser: {
        id_user:number,
        firstName: string,
        lastName: string,
        age: string,
        email: string,
        gender: string
    } = {
        id_user:-1,
        firstName:'',
        lastName:'',
        age:'',
        gender:'',
        email:''   
    };

    events: { name: string, location: string, date: string, attendence: number }[] = [];
    selectedEvents: { name: string, location: string, date: string, attendence: number }[] = [];

    

    private loggedIn: boolean = false;

    constructor(private http: Http) {
    }

    
    registerUser(user: { email: string, password: string, firstName: string, lastName: string, gender: string, age: number }) {
        return this.http.post('http://localhost:8080/sEvents/register', user);
    }

    loginUser(user: { email: string, password: string, firstName: string, lastName: string, gender: string, age: number }) {
        return this.http.post('http://localhost:8080/sEvents/login/login', user);
    }

    searchFriend(user: { email: string, password: string, firstName: string, lastName: string, gender: string, age: number }) {
        return this.http.post('http://localhost:8080/sEvents/friendSearch',user);
    }
    
    addFriend(User_friend:{ id_user: number, id_friend: number }) {
        return this.http.post('http://localhost:8080/sEvents/account/friends/addFriend',User_friend);
    }

    isLoggedIn() {
        return this.loggedIn;
    }

    setUserLoggedIn() {
        this.loggedIn = true;
    }

    logoutUser() {
        this.loggedIn = false;
    }

    getFriends(User_friend: { id_user: number, id_friend: number }) {
        return this.http.post('http://localhost:8080/sEvents/account/friends/listFriends', User_friend);
    }

    getPendingFriends(User_friend: {id_user: number, id_friend:number}) {
        return this.http.post('http://localhost:8080/sEvents/account/friends/listFriends/pending',User_friend);
    }

    acceptRequest(User_friend: {id_user: number, id_friend:number}) {
        return this.http.post('http://localhost:8080/sEvents/account/friends/listFriends/accepted',User_friend);
    }

    rejectRequest(User_friend: {id_user: number, id_friend:number}) {
        return this.http.post('http://localhost:8080/sEvents/account/friends/listFriends/rejected',User_friend);
    }

    getEvents() {
        return this.http.get('http://localhost:8080/sEvents/account/events');
    }


    getSports() {
        return this.http.get('http://localhost:8080/sEvents/account/sports');
    }

    getSpecificEvent(Event_sport: { event_id: number, sport_id: number }) {
        return this.http.post('http://localhost:8080/sEvents/account/events/id', Event_sport);
    }

    parseFriends(friends: any) {
        let users: { id_user: number, age: number, gender: string, firstName: string, lastName: string }[] = [];
        for (let f of friends) {
            let user: { id_user: number, age: number, gender: string, firstName: string, lastName: string } = {
                id_user: f[0],
                age: f[1],
                gender: f[2],
                firstName: f[3],
                lastName: f[4]
            }
            users.push(user);
        }
        return users;
    }
    parseSports(sports: any) {

        let listOfSports: { name: string, id: number }[] = [];
        for (let s of sports) {
            let sport: { name: string, id: number } = {
                id: s.id_sport,
                name: s.sport_name
            }
            listOfSports.push(sport);
        }
        return listOfSports;
    }

    parseEvents(events: any) {
        let listOfEvents: { name: string, location: string, date: string, attendence: number }[] = [];
        for (let event of events) {
            let e: { name: string, location: string, date: string, attendence: number } = {
                name: event.name,
                location: event.location,
                date: event.date,
                attendence: event.attendence
            }
            listOfEvents.push(e);
        }
        return listOfEvents;
    }

    resetForm() {
    }

    unfriend(User_friend: { id_user: number, id_friend: number }) {
        return this.http.post('http://localhost:8080/sEvents/account/friends/unfriend',User_friend);
    }

    getUserId() {
        
    }
}