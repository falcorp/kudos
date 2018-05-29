import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule, NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { AppRoutingModule } from './app-routing.module';
import { LogoutComponent } from './components/logout/logout.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';

// NB ANGULARFIRE IMPORTS

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {HttpModule} from '@angular/http';

export const firebaseConfig = {
    apiKey: 'AIzaSyDNW_nPhGMr-6LlaSntRso2qhk5WDrpyqc',
    authDomain: 'kudos-application.firebaseapp.com',
    databaseURL: 'https://kudos-application.firebaseio.com',
    projectId: 'kudos-application',
    storageBucket: 'kudos-application.appspot.com',
    messagingSenderId: '841527973504'
};

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavBarComponent,
    DashboardComponent,
    LogoutComponent,
    ProfileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [NgbTabsetConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
