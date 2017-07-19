import { Component, OnInit } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { Route, ActivatedRoute } from "@angular/router";
import { ServiceAccount } from "app/auth/account/service.account";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  
  constructor(private route:ActivatedRoute, private accountService: ServiceAccount) { }

  ngOnInit() {
  }

  logout() {
    this.accountService.logoutUser();
  }
}
