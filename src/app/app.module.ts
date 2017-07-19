import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AppRoutingModule } from './routing.module';
import { AccountComponent } from './auth/account/account.component';
import { EventsComponent } from './auth/account/events/events.component';
import { FriendsComponent } from './auth/account/friends/friends.component';
import { SettingsComponent } from './auth/account/settings/settings.component';
import { RegisterService } from "app/auth/register/register.service";
import {HttpModule } from '@angular/http';
import { ServiceLogin } from "app/auth/login/service.login";
import { ServiceAccount } from "app/auth/account/service.account";


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    EventsComponent,
    FriendsComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [RegisterService,ServiceLogin,ServiceAccount],
  bootstrap: [AppComponent]
})
export class AppModule { }
