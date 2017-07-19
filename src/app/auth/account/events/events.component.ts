import { Component, OnInit } from '@angular/core';
import { ServiceAccount } from "app/auth/account/service.account";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {


  events:{name: string, location: string, date: string, attendence: number}[] = [
    {name:'Football', location:'Ploiesti', date: '8-sep-2017', attendence:50},
    {name:'Handball', location:'Bucuresti', date: '10-aug-2017', attendence:50},
    {name:'Tennis', location:'Constanta', date: '28-ian-2017', attendence:50},
    {name:'Volley', location:'Cluj', date: '13-iul-2017', attendence:50},
    {name:'Table-tennis', location:'Arad', date: '7-mai-2017', attendence:50},
    {name:'Hokey', location:'Bistrita', date: '24-apr-2017', attendence:50},
    {name:'Running', location:'Timisoara', date: '14-iul-2017', attendence:50},
    {name:'Baseball', location:'Iasi', date: '25-dec-2017', attendence:50}

  ];
  constructor(private accountService: ServiceAccount) { }

  ngOnInit() {
  }

  isLoggedIn() {
    return this.accountService.isLoggedIn();
  }
}
