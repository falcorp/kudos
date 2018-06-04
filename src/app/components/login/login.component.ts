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

   email;
  password;
  constructor(private authService:AuthService,private router: Router) {}

  ngOnInit() {
  }

  onSubmit(form : NgForm){
    this.email= form.value.email;
    this.password= form.value.password;
    this.authService.login(this.email,this.password);
  }

}
