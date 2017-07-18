///<reference path="../../node_modules/firebase/app.d.ts"/>
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
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        this.user = user;
      }
    });
  }

  login() {
    console.log('fb >> login()');
    // this.afAuth.auth.signInAnonymously();
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(function (result) {
        console.log('fb >> login successful. result:');
        console.log(result);
        console.log(result.user.displayName);
        var userName = result.user.displayName;
        console.log('fb >> login successful. userName:');
        console.log(userName);
      });
    // this.user = this.afAuth.authState;
    console.log('fb >> login completed');
    console.log(this.user);
  }

  logout() {
    console.log('fb >> logout()');
    this.afAuth.auth.signOut();
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
