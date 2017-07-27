import { Component, OnInit, ViewChild } from '@angular/core';
import { AccountService } from "app/auth/account.service";
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  @ViewChild('f') sform: NgForm;
  pendingFriends: { id_user: number, age: number, gender: string, firstName: string, lastName: string }[] = [];

  found: boolean = false;
  pending: boolean = false;
  sFriend: { id_user: number, age: number, gender: string, firstName: string, lastName: string };
  friends: { id_user: number, age: number, gender: string, firstName: string, lastName: string }[] = [];
  isOpen: boolean = false;
  constructor(private accountService: AccountService) { }

  ngOnInit() {
    if (this.accountService.isLoggedIn) {
      let user: { id_user: number, id_friend: number } = { id_user: this.accountService.loggedInUser.id_user, id_friend: 1000 };
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

      let pf = this.accountService.getPendingFriends(user).subscribe(
        (response) => {
          let listFriends = this.accountService.parseFriends(response.json());
          for (let f of listFriends) {
            let friend: { id_user: number, age: number, gender: string, firstName: string, lastName: string } = {
              id_user: f.id_user,
              age: f.age,
              gender: f.gender,
              firstName: f.firstName,
              lastName: f.lastName
            };
            this.pendingFriends.push(friend);
          }
        },
        (err) => {
          console.log(err);
        }
      )
    } else {
      console.log('logged out');
    }
  }
  isLoggedIn() {
    return this.accountService.isLoggedIn();
  }

  toggleOpen() {
    this.isOpen = !this.isOpen;
    this.found = false;
  }

  unfriend(friend) {
    console.log(friend);
    let f: { id_user: number, id_friend: number } = {
      id_user: this.accountService.loggedInUser.id_user,
      id_friend: friend.id_user
    }
    console.log(f);
    this.accountService.unfriend(f).subscribe(
      (res) => {
        console.log(res);
        this.updateFriendsList(f.id_friend);

      },
      (err) => {
        console.log(err);

      }
    );
  }
  updateFriendsList(id: number) {
    console.log('updated' + id);
    let temp: { id_user: number, age: number, gender: string, firstName: string, lastName: string }[] = [];
    for (let f of this.friends) {
      if (f.id_user !== id) {
        temp.push(f);
      }
    }
    console.log(temp);
    this.friends = temp.slice();
  }

  searchFriend() {
    let user: { email: string, password: string, firstName: string, lastName: string, gender: string, age: number } = {
      email: this.sform.value.email,
      password: '',
      firstName: '',
      lastName: '',
      gender: '',
      age: -1
    }
    this.accountService.searchFriend(user).subscribe(
      (res) => {
        this.sFriend = res.json();
        console.log(this.sFriend);
        this.found = true;
      },
      (err) => {
        console.log(err);
        this.found = false;
      }
    )
  }

  isFriend(friend) {
    for (let f of this.friends) {
      if (f.id_user == friend.id_user) {
        // console.log('true');
        return true;
      }
    }
    // console.log('false');
    return false;
  }

  addFriend(friend) {
    let user_friend: { id_user: number, id_friend: number } = {
      id_user: this.accountService.loggedInUser.id_user,
      id_friend: friend.id_user
    }

    this.accountService.addFriend(user_friend).subscribe(
      (res) => {
        console.log(res);
        this.pending = true;
        this.resetFriendList();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  resetFriendList() {
    this.friends = [];
    let user: { id_user: number, id_friend: number } = { id_user: this.accountService.loggedInUser.id_user, id_friend: 1000 };
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
    )
  }

  rejectFriend(friend) {
    console.log(friend);
    this.pending = false;
    let user_friend: { id_user: number, id_friend: number } = {
      id_user: this.accountService.loggedInUser.id_user,
      id_friend: friend.id_user
    }

    this.accountService.rejectRequest(user_friend).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );

  }

  acceptFriend(friend) {
    console.log(friend);
    this.pending = false;
    let user_friend: { id_user: number, id_friend: number } = {
      id_user: this.accountService.loggedInUser.id_user,
      id_friend: friend.id_user
    }


    this.accountService.acceptRequest(user_friend).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );

  }

  updatePendingList() {
    let user: { id_user: number, id_friend: number } = { id_user: this.accountService.loggedInUser.id_user, id_friend: 1000 };
    let pf = this.accountService.getPendingFriends(user).subscribe(
      (response) => {
        let listFriends = this.accountService.parseFriends(response.json());
        for (let f of listFriends) {
          let friend: { id_user: number, age: number, gender: string, firstName: string, lastName: string } = {
            id_user: f.id_user,
            age: f.age,
            gender: f.gender,
            firstName: f.firstName,
            lastName: f.lastName
          };
          this.pendingFriends.push(friend);
        }
      },
      (err) => {
        console.log(err);
      }
    )
  }
}
