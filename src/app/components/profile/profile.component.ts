import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {AngularFireAuth} from 'angularfire2/auth';
import {DbContextService} from '../../db-context.service';


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

  constructor(private afAuth: AngularFireAuth, private modalService: NgbModal, public  dbContext: DbContextService) {
   this.afAuth.authState.subscribe(user => {
     console.log(user);
     if (user) {
       this.userId = user.uid;
       this.displayName = user.displayName;
       this.email = user.email;
       this.photoURL = user.photoURL;
       this.emailVerified = user.emailVerified;

       this.dbContext.getUserInfo(this.userId);
     }
   });
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
  updateUserProfile() {
    this.dbContext.updateUserInfo({})
      .then(result => {
        console.log('result', result);
      });
  }

  ngOnInit() {

  }

  delete() {
    this.dbContext.deleteAccount();
  }

}
