import { Component, OnInit } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { Route, ActivatedRoute } from "@angular/router";
import { AccountService } from "app/auth/account.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  
  constructor(private route:ActivatedRoute, private accountService: AccountService) { }

  ngOnInit() {
  }

  logout() {
    this.accountService.logoutUser();
  }
}
