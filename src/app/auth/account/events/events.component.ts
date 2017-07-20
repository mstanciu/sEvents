import { Component, OnInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { ServiceAccount } from "app/auth/account/service.account";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  @ViewChild('f') selectForm: NgForm;
  events: { name: string, location: string, date: string, attendence: number }[] = [];
  eventsCopy: { name: string, location: string, date: string, attendence: number }[] = [];

  constructor(private accountService: ServiceAccount) { }

  ngOnInit() {

    if (this.isLoggedIn()) {
      console.log(this.isLoggedIn());
      this.accountService.getEvents().subscribe(
        (response) => {
          let listOfEvents = this.accountService.parseEvents(response.json());
          for (let e of listOfEvents) {
            this.events.push(e);
          }
          console.log(this.events.slice());
          this.eventsCopy = this.events.slice();

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

  selectName(name) {
    let temp: { name: string, location: string, date: string, attendence: number }[] = [];
    for (let e of this.events) {
      if (e.name === name) {
        temp.push(e);
      }
    }

    this.events = temp;
    console.log(this.events);
  }

  selectLocation(location) {
    console.log(location);
    return location;
  }

  selectDate(date) {
    console.log(date);
    return date;
  }

  resetForm() {
    console.log(this.selectForm);
    this.events = this.eventsCopy.slice();
    this.selectForm.reset();
  }
}
