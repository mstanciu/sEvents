import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  users:{id_user:number, email: string, password: string, age: number, gender: string, firstName: string, lastName: string}[];

  constructor() { }

  ngOnInit() {
  }

}
