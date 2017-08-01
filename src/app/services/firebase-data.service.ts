import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {AngularFireAuth} from "angularfire2/auth";
import * as firebase from 'firebase/app';
import {FirebaseApp} from "angularfire2";
import {VocEntry} from "../vocab/voc-entry.models";

@Injectable()
export class FirebaseDataService {

  user: firebase.User;
  user2: Observable<firebase.User>;
  myVocabulary: FirebaseListObservable<any[]>;
  msgVal: string = '';
  vocEntry:VocEntry;

  constructor(public afAuth: AngularFireAuth, public afdb: AngularFireDatabase, public fbApp : FirebaseApp) {
    let fbThis = this;
    this.user2 = afAuth.authState;
    console.log('fb >> constructor >> user2: ');
    console.log(this.user2);
    fbThis.myVocabulary = afdb.list('/', {
      query: {
        limitToLast: 50
      }
    });
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        fbThis.user = user;
        console.log('fb >> constructor >> onAuthStateChanged >> user:');
        console.log(user);
        let path: string = fbThis.user.displayName.split(' ')[0];
        console.log('fb >> constructor >> onAuthStateChanged >> path - ' + path);
        fbThis.myVocabulary = afdb.list('/'+path+'/vocab', {
          query: {
            limitToLast: 50
          }
        });
        console.log('fb >> constructor >> onAuthStateChanged >> myVocabulary: ');
        console.log(fbThis.myVocabulary);
      }
    });
  }

  login() {
    let fbThis = this;
    console.log('fb >> login()');
    // this.afAuth.auth.signInAnonymously();
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    // this.afAuth.auth.signInWithEmailAndPassword('myemail@email.com' , 'pass1234567')
      .then(function (result) {
        console.log('fb >> login successful. result:');
        console.log(result);
        console.log('fb >> login >> user:');
        fbThis.user = result.user;
        console.log('fb >> login successful. user:');
        console.log(fbThis.user);
        let path: string = fbThis.user.displayName.split(' ')[0];
        console.log('fb >> constructor >> onAuthStateChanged >> path - ' + path);
        fbThis.myVocabulary = fbThis.afdb.list('/'+path+'/vocab', {
          query: {
            limitToLast: 50
          }
        });
      })
      .catch(function (err){
        console.log('fb >> login error');
        console.log(err);
      });
    // this.user = this.afAuth.authState;
    console.log('fb >> login ended');
    console.log(this.user);
  }

  logout() {
    console.log('fb >> logout()');
    this.afAuth.auth.signOut();
    this.user = null;
  }

  saveVoc(voc: VocEntry) {
    console.log('fb >> saveVoc(' + voc + ')');
    this.myVocabulary.push(voc);
    // this.msgVal = '';
  }

  getUser(): firebase.User {
    console.log('fb >> getUser()');
    console.log(this.user);
    return this.user;
  }

  getUser2(): Observable<firebase.User> {
    console.log('fb >> getUser2()');
    console.log(this.user2);
    return this.user2;
  }

  getVocabulary(): FirebaseListObservable<any[]> {
    console.log('fb >> getVocabulary()');
    return this.myVocabulary;
  }


}
