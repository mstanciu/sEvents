import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './auth/login/login.component';
import { RegisterComponent } from "app/auth/register/register.component";

const appRoutes: Routes = [
    {path: '', component: AppComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent}
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
