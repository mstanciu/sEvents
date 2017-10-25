import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from "app/auth/account.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private route: Router, private accountService: AccountService) {
    
  }
  
  ngOnInit() {
    if (this.accountService.isLoggedIn()) {
      this.route.navigate(['login']);
    } else {
      this.route.navigate(['register']);
    }
    
  }
}
