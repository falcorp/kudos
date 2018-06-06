import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

  constructor(private router:Router) { }

  login(email:string, password:string){
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then( success => this.router.navigate(['/dashboard'])
    ).catch(
      err => console.log(err.message)
    );
  }

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