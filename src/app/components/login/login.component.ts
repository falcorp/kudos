import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth.service';
//for routing upon click event
import { Router } from '@angular/router';
import * as firebase from 'firebase';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService,private router: Router) {}

  ngOnInit() {
  }

  onSubmit(form : NgForm){
    const email= form.value.email;
    const password= form.value.password;

    this.authService.login(email,password);
  }
  

  loginGoogle(){
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
}
