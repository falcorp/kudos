import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

import * as firebase from 'firebase';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router, private authservice: AuthService) { }

  ngOnInit() {
  }

  loginGoogle() {
    this.authservice.loginGoogle();
  }


  fbLogin() {
    this.authservice.fbLogin();
  }
}
