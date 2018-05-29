import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import {Router} from '@angular/router';
import {FormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    password: string;
    email: string;
    error: any;


    constructor(public  af: AngularFireAuth, private router: Router) {

    }

    onSubmit() {
            this.af.auth.createUser({
                email: this.email,
                password: this.password
            }).then(
                (success) => {
                    this.router.navigate(['/login']);
                }).fail(
                (err) => {
                    console.log(err);
                    this.error = err;
                });

    }

    ngOnInit() {
    }

}
