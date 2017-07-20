import { Component, OnInit } from '@angular/core';
import { ServiceAccount } from "app/auth/account/service.account";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: { name: string, location: string, date: string, attendence: number }[] = [];

  constructor(private accountService: ServiceAccount) { }

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

  ngOnInit() {
    console.log(this.events);
    if (this.isLoggedIn) {
      this.accountService.getEvents().subscribe(
        (response) => {
          let listOfEvents = this.parseEvents(response.json());
          console.log(listOfEvents);
          for (let e of listOfEvents) {
            this.events.push(e);
          }

        },
        (err) => {

          console.log(err);
          return null;
        }
      );

    }
  }

  isLoggedIn() {
    return this.accountService.isLoggedIn();
  }
}
