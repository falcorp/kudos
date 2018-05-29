//for routing
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';

//links
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  {path: 'profile', component: ProfileComponent },
  {path: 'logout', component: LogoutComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
    declarations: [],
    imports: [ RouterModule.forRoot(appRoutes)],
    providers: [],
    bootstrap: [],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }