import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './auth/login/login.component';
import { RegisterComponent } from "app/auth/register/register.component";
import { AccountComponent} from './auth/account/account.component'
import { EventsComponent } from "app/auth/account/events/events.component";
import { FriendsComponent } from "app/auth/account/friends/friends.component";

const appRoutes: Routes = [
    {path: '', component: AppComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'account', component: AccountComponent, children:[
      {path: 'events', component: EventsComponent },
      {path: 'friends', component: FriendsComponent}
    ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
