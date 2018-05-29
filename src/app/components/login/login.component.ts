import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms';
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  messageClass;
  message;
  processing = false;
 
  username: FormControl;
  password: FormControl;

  form: FormGroup;

  constructor(private fb:FormBuilder) {}

  ngOnInit() {

    this.username = new FormControl('',Validators.required);
    this.password = new FormControl('',Validators.required);

    this.form = new FormGroup({
      username: this.username,
      password: this.password
    });
  }

  LoginEmailPassword(username: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(username,password)
    .then(
      response => console.log('Login successfull')
    ).catch();
  }

  // Function to disable form
  disableForm() {
    this.form.controls['username'].disable(); // Disable username field
    this.form.controls['password'].disable(); // Disable password field
  }

  // Function to enable form
  enableForm() {
    this.form.controls['username'].enable(); // Enable username field
    this.form.controls['password'].enable(); // Enable password field
  }

  public showData(){
    console.log(this.form.value);
  }
 

  
}
