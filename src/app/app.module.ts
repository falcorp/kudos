import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { HomePageComponent } from './home-page/home-page.component';
=======
import { RegisterComponent } from './register/register.component';
>>>>>>> 21cb75899617af1bed4b264f76a49c2c69ed46c2


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
<<<<<<< HEAD
    HomePageComponent
=======
    RegisterComponent
>>>>>>> 21cb75899617af1bed4b264f76a49c2c69ed46c2
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
