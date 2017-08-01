import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireAuthModule} from "angularfire2/auth";
import {firebaseConfig} from "./services/firebase.config";
import {AppComponent} from './app.component';
import {VocabComponent} from './vocab/vocab.component';
import {FirebaseDataService} from './services/firebase-data.service';
import { VocabEditComponent } from './vocab-edit/vocab-edit.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    VocabComponent,
    VocabEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot()
  ],
  providers: [FirebaseDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
