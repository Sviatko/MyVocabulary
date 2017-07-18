import {Component, OnInit} from '@angular/core';
import {FirebaseDataService} from "../firebase-data.service";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {Observable} from "rxjs/Observable";
import * as firebase from 'firebase/app';
import {AngularFireAuth} from "angularfire2/auth";
import {FirebaseApp} from "angularfire2";

@Component({
  selector: 'app-vocab',
  templateUrl: './vocab.component.html',
  styleUrls: ['./vocab.component.less'],
  providers: [FirebaseDataService]
})
export class VocabComponent implements OnInit {

  msgVal: string = '';
  items: FirebaseListObservable<any[]>;
  user: firebase.User;
  userName: string;

  // constructor(private firebaseDataService: FirebaseDataService) {
  constructor(public afAuth: AngularFireAuth, public afdb: AngularFireDatabase, public fbApp: FirebaseApp) {
    this.firebaseInit();
  };

  firebaseInit() {
    let voc = this;
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log('vocab >> constructor >> onAuthStateChanged >> user: ');
        console.log(user);
        voc.user = user;
        // voc.username = user.displayName;
        console.log('vocab >> constructor >> onAuthStateChanged >> voc.user: ');
        console.log(voc.user);
        // console.log(voc.userName);
        console.log('-------------------------');
      }

    })
  }

// constructor() {};
  ngOnInit() {
    this.getMessages();
    this.getUser();
  }

  vocRecords = [
    {
      front: 'live',
      back: 'жити'
    },
    {
      front: 'sign',
      back: 'знак'
    },

    {
      front: 'sign',
      back: 'вчити'
    }

  ];

  getMessages() {
    console.log('vocab >> getMessages()');
    // this.items = this.firebaseDataService.getMassages();
  }

  getUser() {
    console.log('vocab >> getUser()');
    // this.user = this.firebaseDataService.getUser();
    console.log(this.user);
    console.log('-------------------------');
  }

  login() {
    let voc = this;
    console.log('vocab >> login()');
    console.log('vocab >> login >> this.user: ');
    console.log(this.user);
    console.log('-------------------------');
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(function (result) {
        console.log('vocab >> login successful. result:');
        console.log(result);
        console.log('-------------------------');
        // voc.user = this.afAuth.authState;
      });
    console.log('vocab >> login completed. this.user:');
    console.log(this.user);
    console.log(this.userName);
    console.log('-------------------------');
  };

  logout() {
    console.log('vocab >> logout()  user before:');
    console.log(this.user);
    // this.firebaseDataService.logout()
    this.afAuth.auth.signOut();
    // this.user = this.afAuth.authState;
    console.log('vocab >> logout()  user after:');
    console.log(this.user);
    console.log('-------------------------');
  };

  send(msg: string) {
    console.log('vocab >> send(' + msg + ')');
    console.log(this.user);
    console.log('-------------------------');
    // this.firebaseDataService.send(msg)
  };

}