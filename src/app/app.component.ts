import {Component} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {Observable} from "rxjs/Observable";
import * as firebase from 'firebase/app';
import {AngularFireAuth} from "angularfire2/auth";
import {FirebaseApp} from "angularfire2";
import {FirebaseDataService} from "./services/firebase-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: firebase.User;
  private showVocab: boolean = true;


  constructor(private firebaseSvc:FirebaseDataService) {
    this.firebaseSvc.firebaseInit();
    this.user = firebaseSvc.user;
  };

  login() {
    this.firebaseSvc.login()
  };

  logout() {
    this.firebaseSvc.logout();
  };

  editVocabulary() {
    this.showVocab = !this.showVocab;
  }
}
