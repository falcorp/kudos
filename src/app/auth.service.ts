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
  
  logout(){
    firebase.auth().signOut()
    .then(
      success => this.router.navigate(['/home']))
    .catch(
      err => console.log(err.message)
    );
  }
}