import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {Observable} from "rxjs/Observable";
import * as firebase from 'firebase/app';
import {AngularFireAuth} from "angularfire2/auth";
import {FirebaseApp} from "angularfire2";
import {FirebaseDataService} from "./services/firebase-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  user: firebase.User;
  private showVocab: boolean = true;


  constructor(private firebaseSvc:FirebaseDataService) {
  };

  ngOnInit() {
    console.log('vocab >> ngInit()');
    let voc = this;
    this.firebaseSvc.getUser2().subscribe(user => voc.user = user)
  }

  login() {
    this.firebaseSvc.login()
  };

  logout() {
    this.firebaseSvc.logout();
  };

  editVocabulary() {
    this.showVocab = !this.showVocab;
  }

  getUser() {
    this.user = this.firebaseSvc.user;
    console.log(this.user);
    console.log('-------------------------');
  }

}
