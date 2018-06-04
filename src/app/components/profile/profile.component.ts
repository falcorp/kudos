import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  displayName: string;
  email: string;
  emailVerified: boolean;
  photoURL: string;
  isAnonymous: boolean;
  uid: string;
  providerData: Array<any>;
  constructor() {


this.getData();
  }

   getData(){

     firebase.auth().onAuthStateChanged((user) =>{
     if (user){
       this.displayName = user.displayName;
       this.email = user.email;
       this.emailVerified = user.emailVerified;
       this.photoURL = user.photoURL;
       this.isAnonymous = user.isAnonymous;
       this.uid = user.uid;
       this.providerData = user.providerData;
     }
     }

    }





  ngOnInit() {


  }

}
