import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  login(email:string, password:string){
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then( response => console.log(response)
    ).catch(
      err => console.log(err.message)
    );
  }
}