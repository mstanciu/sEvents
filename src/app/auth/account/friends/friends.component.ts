import { Component, OnInit } from '@angular/core';
import { AccountService } from "app/auth/account.service";



@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friends: { id_user: number, age: number, gender: string, firstName: string, lastName: string }[] = [];
  isOpen: boolean = false;
  constructor(private accountService: AccountService) { }

  ngOnInit() {
    if (this.accountService.isLoggedIn) {
      let user: { id_user: number, id_friend: number } = { id_user: 1, id_friend: 1 };
      let friends = this.accountService.getFriends(user).subscribe(
        (response) => {
          console.log(response.json());
          let listFriends = this.accountService.parseFriends(response.json());
          for (let f of listFriends) {
            let friend: { id_user: number, age: number, gender: string, firstName: string, lastName: string } = {
              id_user: f.id_user,
              age: f.age,
              gender: f.gender,
              firstName: f.firstName,
              lastName: f.lastName
            };
            this.friends.push(friend);
          }
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      console.log('logged out');
    }
  }
  isLoggedIn() {
    return this.accountService.isLoggedIn();
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
    console.log('aici');
  }

  unfriend(friend) {

  }

}
