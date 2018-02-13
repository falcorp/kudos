import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterComponent } from './register/register.component';
import { AboutPageComponent } from './about-page/about-page.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'about-page', component: AboutPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home-page', component: HomePageComponent},
  ]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    RegisterComponent,
    AboutPageComponent,
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
