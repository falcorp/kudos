//for routing
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ProfileComponent } from './components/profile/profile.component';

//links
const appRoutes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'dashboard', component: DashboardComponent },
  {path: 'profile', component: ProfileComponent },
  {path: 'logout', component: LogoutComponent },
];

@NgModule({
    declarations: [],
    imports: [ RouterModule.forRoot(appRoutes)],
    providers: [],
    bootstrap: [],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }