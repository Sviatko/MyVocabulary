import {Component, OnInit} from '@angular/core';
import {FirebaseDataService} from "../services/firebase-data.service";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {Observable} from "rxjs/Observable";
import * as firebase from 'firebase/app';
import {AngularFireAuth} from "angularfire2/auth";
import {FirebaseApp} from "angularfire2";
import {VocEntry} from "./voc-entry.models";

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
  addEntry: boolean = false;
  entry: VocEntry;
  vocabulary: VocEntry[];
  vocab: any[];

  // constructor(private firebaseDataService: FirebaseDataService) {
  constructor(private firebaseDataService: FirebaseDataService) {
  };

  ngOnInit() {
    // this.getMessages();
    // this.getUser();
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

  getVocabulary(): FirebaseListObservable<any[]> {
    console.log('vocab >> getVocabulary()');
    // this.vocab = this.firebaseDataService.getVocabulary();
    console.log('vocab >> getVocabulary() >> vocab:');
    console.log(this.firebaseDataService.getVocabulary());
    return this.firebaseDataService.getVocabulary();
  }



}
