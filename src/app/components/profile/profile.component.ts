import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {AngularFireAuth} from 'angularfire2/auth';
import {DbContextService} from '../../db-context.service';
import * as firebase from 'firebase';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  closeResult: string;
  displayName: string;
  email: string;
  emailVerified: boolean;
  photoURL: string;
  isAnonymous: boolean;
  userId: string;
  providerData: Array<any>;
  updtForm: FormGroup;
  updtDisplayName: FormControl;
  photo: FormControl;



  constructor(private afAuth: AngularFireAuth, private modalService: NgbModal, public  dbContext: DbContextService) {
   this.afAuth.authState.subscribe(auth => {
     console.log(auth);
     if (auth) {
       this.userId = auth.uid;
       this.dbContext.getUserInfo(this.userId)
         .then(user =>{
           this.getData(user);
         });
     }
   });
  }
  getData(user: any ) {
    this.displayName = user.displayName;
    this.email = user.email;
    this.photoURL = user.photoURL;
    this.emailVerified = user.emailVerified;
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
  // updateUserProfile() {
  //   this.dbContext.updateUserInfo({})
  //     .then(result => {
  //       console.log('result', result);
  //     });
  // }
  ngOnInit() {
    this.updtDisplayName = new FormControl('');
    this.photo = new FormControl('');
    this.updtForm = new FormGroup({
      DisplayNameupdt: this.updtDisplayName,
      profileImage: this.photo

    });
  }



  updtSubmit() {
    const obj = {
      uid: this.userId,
      displayName: this.updtDisplayName.value,
      emailVerified: this.emailVerified,
      email: this.email,
      photoURL: this.photoURL
    }
    this.dbContext.updateUserInfo(obj, this.photo)
      .then(result => {
        if (result) {
          this.dbContext.getUserInfo(this.userId)
            .then( user => {
              this.getData(user);
            });
        }
      });
  }

}
