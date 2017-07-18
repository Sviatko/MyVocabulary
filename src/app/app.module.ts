import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireAuthModule} from "angularfire2/auth";
import {firebaseConfig} from "./firebase.config";
import {AppComponent} from './app.component';
import {VocabComponent} from './vocab/vocab.component';
import {FirebaseDataService} from './firebase-data.service';

@NgModule({
  declarations: [
    AppComponent,
    VocabComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
