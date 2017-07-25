import { Component, OnInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from "app/auth/account.service";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  @ViewChild('f') selectForm: NgForm;
  events: { name: string, location: string, date: string, attendence: number }[] = [];
  eventsCopy: { name: string, location: string, date: string, attendence: number }[] = [];
  sports: { name: string , id: number}[] = [];
  sportsCopy: { name: string,  id: number}[] = [];
  defaultName:string = 'Select a sport';
  defaultLocation:string = 'Select a location';
  defaultDate:string = 'Select a date';

  constructor(private accountService: AccountService) { }

  ngOnInit() {

    if (this.isLoggedIn()) {
      console.log(this.isLoggedIn());
      this.accountService.getEvents().subscribe(
        (response) => {
          let listOfEvents = this.accountService.parseEvents(response.json());
          for (let e of listOfEvents) {
            this.events.push(e);
          }
          this.eventsCopy = this.events.slice();
        },
        (err) => {

          console.log(err);
          return null;
        }
      );
      this.accountService.getSports().subscribe(
        (response) => {
          let listOfSports = this.accountService.parseSports(response.json());
          console.log(listOfSports);
          for(let sport of listOfSports) {
            this.sports.push(sport);
          }
          this.sportsCopy = this.sports.slice();
        },
        (err) => {
          console.log(err);
        }
      )
    }
  }

  isLoggedIn() {
    return this.accountService.isLoggedIn();
  }

  selectName(name) {
    console.log('am intrat');
    if(name === this.defaultName) {
      this.events = this.eventsCopy.slice();
      return;
    }
    let id;
    for(let s of this.sportsCopy) {
      if(s.name === name){
        id = s.id;
        break;
      }
    }
    this.accountService.getSpecificEvent({event_id:id, sport_id: id}).subscribe(
      (response) => {
        let tempVal:{ name: string, location: string, date: string, attendence: number }[] = [];
        let res = response.json();
        for( let r of res) {
          let v:{name: string, location: string, date: string, attendence: number } = {
            name:r[0],
            location:r[1],
            date:r[2],
            attendence:r[3]
          }
          tempVal.push(v);
        }
        this.events = tempVal.slice();
       
      },
      (err) => console.log(err)
    );
  }

  selectLocation(location) {
    console.log(location);
    if(this.defaultLocation === location) {
      this.events = this.eventsCopy.slice();
      return;
    }

    let tempVal:{ name: string, location: string, date: string, attendence: number }[] = [];
    for(let e of this.eventsCopy) {
      if(e.location === location) {
        tempVal.push(e);
      }
    }
    this.events = tempVal;
    console.log('i m out');
  }

  selectDate(date) {
    console.log(date);
    if(this.defaultDate === date) {
      this.events = this.eventsCopy.slice();
      return;
    }
    let tempVal:{ name: string, location: string, date: string, attendence: number }[] = [];
    for(let e of this.eventsCopy) {
      if(e.date === date) {
        tempVal.push(e);
      }
    }
    this.events = tempVal;
    console.log('i m out');
  }

  resetForm() {
    console.log(this.selectForm);
    this.events = this.eventsCopy.slice();
    this.selectForm.reset();
    this.selectForm.setValue({
      selectName: 'Select a sport',
      selectLocation: 'Select a location',
      selectDate: 'Select a date'
    })
  }
}
