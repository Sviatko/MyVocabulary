import {Component, OnInit} from '@angular/core';
import {FirebaseDataService} from "../services/firebase-data.service";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {Observable} from "rxjs/Observable";
import * as firebase from 'firebase/app';
import {AngularFireAuth} from "angularfire2/auth";
import {FirebaseApp} from "angularfire2";
import {VocEntry} from "./voc-entry.models";
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-vocab',
  templateUrl: './vocab.component.html',
  styleUrls: ['./vocab.component.less'],
  providers: [FirebaseDataService]
})
export class VocabComponent implements OnInit {

  user: firebase.User;
  vocabulary: VocEntry[];
  searchStr: string = '';

  constructor(private firebaseDataService: FirebaseDataService) {
  };

  ngOnInit() {
  }


  getVocabulary(): FirebaseListObservable<any[]> {
    return this.firebaseDataService.getVocabulary();
  }

  filter(entry: VocEntry) {
    let searchStr = this.searchStr.toLowerCase();
    return !(entry.word.toLowerCase().includes(searchStr) || entry.definition.toLowerCase().includes(searchStr))
  }
}
