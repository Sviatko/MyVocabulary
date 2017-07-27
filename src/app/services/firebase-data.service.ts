///<reference path="../../../node_modules/firebase/app.d.ts"/>
import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {AngularFireAuth} from "angularfire2/auth";
import * as firebase from 'firebase/app';
import {FirebaseApp} from "angularfire2";

@Injectable()
export class FirebaseDataService {
  // constructor() {}
  //
  user: firebase.User;
  items: FirebaseListObservable<any[]>;
  msgVal: string = '';
  // fbAppAuth: () => firebase.auth.Auth;
  // fbApp : FirebaseApp;

  constructor(public afAuth: AngularFireAuth, public afdb: AngularFireDatabase, public fbApp : FirebaseApp) {
    this.items = afdb.list('/messages', {
      query: {
        limitToLast: 50
      }
    });
    this.firebaseInit();
  }

  firebaseInit() {
    let voc = this;
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        voc.user = user;
        console.log('app >> firebaseInit >> onAuthStateChanged >> voc.user: ');
        console.log(voc.user);
      } else {
        voc.user = null;
        console.log('app >> firebaseInit >> onAuthStateChanged >> user undefined ');
      }
    })
  }

  login() {
    let voc = this;
    console.log('app >>login()');
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(function (result) {
        console.log('app >>login successful. result:');
        console.log(result);
        voc.user = result.user;
      });
  }

  logout() {
    console.log('app >>logout()');
    this.afAuth.auth.signOut();
    this.user = null;
  }

  send(desc: string) {
    console.log('fb >> send(' + desc + ')');
    this.items.push({message: desc});
    this.msgVal = '';
  }

  getUser(): string {
    console.log('fb >> getUser()');
    console.log(this.user);
    return this.user.displayName;
  }

  getMassages(): FirebaseListObservable<any[]> {
    console.log('fb >> getMassages()');
    return this.items;
  }


}
