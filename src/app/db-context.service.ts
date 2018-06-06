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
       return snapshot.val();
    });
  }

  storeUserInfo(userData: any) {
    const {displayName, uid, email, emailVerified , phoneNumber} = userData;
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
    if (file != false) {
      const storageRef = firebase.storage().ref();
      let response = await storageRef.child(uid + '.jpg').put(file);
      return  response.metadata.fullPath;
    }
  }

  async updateUserInfo(userData: any, file: any, upload:boolean) {
    const updates = {};

    if (upload ==true){
      userData.photoURL = await this.uploadPicture(file,userData.uid);
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


