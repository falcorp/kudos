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

 async uploadPicture(file:any, uid){
    if (file) {
      const storageRef = firebase.storage().ref();
      let response = await storageRef.child(uid + '.jpg').put(file);
      console.log('upload pic resp',  response.metadata.fullPath);
      return  response.metadata.fullPath;
    }
  }

  async updateUserInfo(userData: any, file: any) {
    const updates = {};

    if (file){
      userData.photoURL = await this.uploadPicture(file,userData.uid);
      console.log("photoUrl",userData.photoURL);
    }
    updates['/users/' + userData.uid] = userData;
  
      return firebase.database().ref().update(updates)
        .then( () => {
          return true;
        })
        .catch(() => {
          return false;
        });
    }

  }


