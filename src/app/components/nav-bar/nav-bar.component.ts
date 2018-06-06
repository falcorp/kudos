import { Component, OnInit } from '@angular/core';
//for routing upon click event
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private AuthService:AuthService,private router:Router) { }

  ngOnInit() {
  }

  logout(){
    this.AuthService.logout();
  }
}
