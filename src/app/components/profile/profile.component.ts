import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    email = '';

    constructor() { }

    ngOnInit() {
    }
    deleteAccount() {
      const user = firebase.auth().currentUser;

      user.delete().then((success) => {
        console.log('User delete');
      }).catch((err) => {
        console.log(err);
      });
      }
  }


