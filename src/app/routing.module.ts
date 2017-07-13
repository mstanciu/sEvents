import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './auth/login/login.component';
import { RegisterComponent } from "app/auth/register/register.component";
import { AccountComponent} from './auth/account/account.component'
import { EventsComponent } from "app/auth/account/events/events.component";
import { FriendsComponent } from "app/auth/account/friends/friends.component";
import { SettingsComponent } from './auth/account/settings/settings.component';
const appRoutes: Routes = [
    {path: '', component: AppComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'account', component: AccountComponent, children:[
      {path: 'events', component: EventsComponent },
      {path: 'friends', component: FriendsComponent},
      {path: 'settings', component: SettingsComponent}
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
