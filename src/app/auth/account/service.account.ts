import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ServiceAccount {
    events: { name: string, location: string, date: string, attendence: number }[] = [];
    selectedEvents: { name: string, location: string, date: string, attendence: number }[] = [];

    listChanged = new Subject<
        { name: string, location: string, date: string, attendence: number }[]
        >();
    private loggedIn: boolean = false;

    constructor(private http: Http) { }

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
        return this.http.get('http://localhost:8080/sEvents/account/events');
    }

    getSports() {
        return this.http.get('http://localhost:8080/sEvents/account/sports');
    }

    getSpecificEvent(Event_sport:{event_id: number, sport_id: number}) {
        return this.http.post('http://localhost:8080/sEvents/account/events/id',Event_sport);
    }

    parseSports(sports: any) {
        
        let listOfSports: {name: string, id: number }[] = [];
        for(let s of sports) {
            let sport: {name: string, id: number } = {
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
        console.log(listOfEvents);
        return listOfEvents;
    }

    resetForm() {
    }

}