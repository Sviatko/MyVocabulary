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
  vocab: any[];
  user: firebase.User;
  userName: string;

  constructor(private firebaseDataService: FirebaseDataService) {
  };

  ngOnInit() {
    console.log('vocab >> ngInit()');
    // this.firebaseDataService.getVocabulary().then(function (user) {
    //   this.user = user;
    // });
    // this.firebaseDataService.getUser().then(function (user) {
    //   this.user = user;
    // });
    let voc = this;
    this.firebaseDataService.getVocabulary().subscribe(vocab => voc.vocab = vocab);
    console.log('vocab >> constructor() >> vocab:');
    console.log(this.vocab);
    this.firebaseDataService.getUser2().subscribe(user => voc.user = user)
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
  // console.log('vocab >> getUser()');


  getVocabulary(): FirebaseListObservable<any[]> {
    console.log('vocab >> getVocabulary()');
    // this.vocab = this.firebaseDataService.getVocabulary();
    console.log('vocab >> getVocabulary() >> vocab:');
    console.log(this.vocab);
    return this.firebaseDataService.getVocabulary();
  }

  getUser() {

    this.user = this.firebaseDataService.user;
    console.log(this.user);
    console.log('-------------------------');
  }

  login() {
    console.log('vocab >> login()  user before:');
    console.log(this.user);
    this.firebaseDataService.login();
    console.log('vocab >> login()  user after:');
    console.log(this.user);
    console.log('-------------------------');
  };

  logout() {
    console.log('vocab >> logout()  user before:');
    console.log(this.user);
    // this.firebaseDataService.logout()
    this.firebaseDataService.logout();
    console.log('vocab >> logout()  user after:');
    console.log(this.user);
    console.log('-------------------------');
  };

  send(msg: string) {
    console.log('vocab >> send(' + msg + ')');
    console.log(this.user);
    console.log('-------------------------');
    this.firebaseDataService.saveVoc(msg);
  };

}
