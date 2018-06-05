import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor(public router: Router) { }

  loginGoogle() {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      (success) => {
        this.router.navigate(['/dashboard']);
      }
    ).catch(
      (err) => {
        console.log(err);
      }
    );
  }

  fbLogin() {
    firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(
      (success) => {
        this.router.navigate(['/profile']);
      }
    ).catch(
    );
  }

}



