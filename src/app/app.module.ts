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
import {HttpModule } from '@angular/http';
import { AccountService } from "app/auth/account.service";
import { DropdownDirective } from './shared/dropdown.directive';
import { OnlyNumbersDirective } from './shared/only-numbers.directive';
import { PassLengthDirective } from './shared/pass-length.directive';
import { ValidateEmailDirective } from './directives/validate-email.directive';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    EventsComponent,
    FriendsComponent,
    SettingsComponent,
    DropdownDirective,
    OnlyNumbersDirective,
    PassLengthDirective,
    ValidateEmailDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
