import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import * as firebase from 'firebase';
import {DbContextService} from '../../db-context.service';
import { Router } from "@angular/router";



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


  constructor(private _dataService: DbContextService, private _router:Router) { }

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
      console.log(me._dataService)
        me._dataService.storeUserInfo(response.user);

        const user = firebase.auth().currentUser;
        user.sendEmailVerification().then(function() {
          //   // Email sent.
        }).catch(function(error) {
          console.log(error);
        });

        me._router.navigate(['/profile']);
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
