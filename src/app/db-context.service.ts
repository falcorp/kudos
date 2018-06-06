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
      phoneNumber,
      kudosScore: 0 ,
      photoURL: ''
    });
  }

  updateUserInfo(userData: any, file: any) {
    const updates = {};
    updates['/users/' + userData.uid] = userData;
    if (file) {
      const storageRef = firebase.storage().ref();
      const profilePicture = storageRef.child('users/' + userData.uid + '.jpg').put(file);

      profilePicture.on('state_changed', function (snapshot:any) {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('upload progress', progress)
      });



    }else{
      return firebase.database().ref().update(updates)
        .then( () => {
          return true;
        })
        .catch(() => {
          return false;
        });
    }

  }

}
