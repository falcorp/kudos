import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import * as firebase from 'firebase';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  showAlert: boolean = false;
  message: string = "no error";

  regForm: FormGroup;
  registerUsername: FormControl;
  registerPassword: FormControl;


  constructor() { }

  ngOnInit() {
      this.registerUsername = new FormControl('');
      this.registerPassword = new FormControl('');

    this.regForm = new FormGroup({
      regUsername: this.registerUsername,
      regPassword: this.registerPassword
    });
  }

  dismissAlert() {
    this.showAlert = false;
  }

  registerSubmit() {
    const me = this;
    firebase.auth().createUserWithEmailAndPassword(this.registerUsername.value, this.registerPassword.value)
      .then( (response) => {
        console.log('Response: ', response);
        const user = firebase.auth().currentUser;
        user.sendEmailVerification().then(function() {
          //   // Email sent.
        }).catch(function(error) {
          console.log(error);
        });
      })
      .catch(function (error) {
      // Handle Errors here.
      // alert(error.code);
      // alert(error.message);
        me.showAlert = true;
        me.message = error.message;
      // ...
    });
  }
}
