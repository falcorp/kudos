import * as firebase from 'firebase';
import {Component, OnInit} from '@angular/core';




@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    ngOnInit() {

        firebase.initializeApp( {
            apiKey: 'AIzaSyDNW_nPhGMr-6LlaSntRso2qhk5WDrpyqc',
            authDomain: 'kudos-application.firebaseapp.com',
            databaseURL: 'https://kudos-application.firebaseio.com',
            projectId: 'kudos-application',
            storageBucket: 'kudos-application.appspot.com',
            messagingSenderId: '841527973504'
        });
    }
}
