import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class DbContextService {

    DataAccess: any;
  constructor() {
    this.DataAccess = firebase.database();
  }
  getUserInfo(id: string) {
    firebase.database().ref('/users/' + id).once('value').then(function(snapshot) {
       console.log('snapshot', snapshot.val());
    });
  }

  storeUserInfo(userData: any) {
    const {displayName, uid, email, emailVerified , phoneNumber} = userData;
    console.log('user data', userData);
    firebase.database().ref('users/' + uid ).set({
      displayName,
      uid,
      email,
      emailVerified,
      phoneNumber
    });
  }

  updateUserInfo(userData: any) {
    const updates = {};
    const postData = {
      emailVerified: true,
      uid: 'BrJ6OJDZn3eJhTY2kDeJRR7Ziys1',
      email: 'thapelo.motene@falcorp.co.za'
    };
    updates['/users/' + 'BrJ6OJDZn3eJhTY2kDeJRR7Ziys1'] = postData;


    return firebase.database().ref().update(updates);

  }

}
