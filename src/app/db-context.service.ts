import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class DbContextService {

    DataAccess: any;
  constructor() {
    this.DataAccess = firebase.database();
  }
  getUserInfo(id: string) {
   return firebase.database().ref('/users/' + id).once('value').then(function(snapshot) {
       console.log('snapshot', snapshot.val());
       return snapshot.val();
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

    updates['/users/' + userData.uid] = userData;


    return firebase.database().ref().update(updates)
      .then( () => {
      return true;
      })
      .catch(() => {
        return false;
      })

  }

}
