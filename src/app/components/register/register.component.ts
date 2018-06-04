import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import * as firebase from 'firebase';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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

  registerSubmit() {
    firebase.auth().createUserWithEmailAndPassword(this.registerUsername.value, this.registerPassword.value)
      .catch(function (error) {
      // Handle Errors here.
      alert(error.code);
      alert(error.message);
      // ...
    });
  }
}
