import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import * as firebase from 'firebase';
//for routing upon click event
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
   }
 
  onSubmit(form: NgForm ){
    const email= form.value.email;
    const password= form.value.password;


    this.authService.login(email,password);
  }

  loginGoogle() {
    this.authService.loginGoogle();
  }

  loginFB() {
    this.authService.fbLogin();
  }
  
}
