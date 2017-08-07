webpackJsonp([2],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"vocab-container\">\r\n  <div class=\"header\">\r\n    <h1>VocabularyTrainer</h1>\r\n    <button class=\"btn-secondary btn-lg active\" *ngIf=\"!user\" (click)=\"login()\">Login</button>\r\n    <button class=\"btn-secondary btn-lg active\" *ngIf=\"user\" (click)=\"logout()\">Logout</button>\r\n\r\n    <div *ngIf=\"user\">\r\n      <div class=\"username\" *ngIf=\"user\">user: {{user.displayName}}</div>\r\n      <!--<button *ngIf=\"!showVocab\" (click)=\"editVocabulary()\">Show Vocabulary</button>-->\r\n      <!--<button *ngIf=\"!!showVocab\" (click)=\"editVocabulary()\">Edit Vocabulary</button>-->\r\n      <div class=\"button-group\">\r\n        <button class=\"btn btn-primary\" [routerLink]=\"['/vocabulary']\">Vocabulary</button>\r\n        <button class=\"btn btn-primary\" [routerLink]=\"['/voc-edit']\">Add word</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div id=\"content\">\r\n    <div class=\"container\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vocab-container {\n  text-align: center;\n  margin: auto;\n}\n.vocab-container .header {\n  text-align: center;\n  position: fixed;\n}\n.vocab-container #content {\n  position: relative;\n  top: 210px;\n  margin-top: 20px;\n}\n.vocab-container .username {\n  padding: 10px;\n}\n.vocab-container input#message {\n  background: #fff;\n  border: none;\n  outline: none;\n  box-shadow: none;\n  font-size: 1.6em;\n  font-weight: 300;\n  margin-bottom: 3em;\n  padding: 1.2em .7em;\n}\n.vocab-container #details-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 100%;\n}\n.vocab-container #details-container p {\n  background: #fff;\n  padding: 1.4em;\n  color: #696969;\n  margin: 12px;\n  width: auto;\n  min-width: 200px;\n}\n.vocab-container img {\n  display: block;\n  margin-bottom: 12px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_data_service__ = __webpack_require__("../../../../../src/app/services/firebase-data.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(firebaseSvc) {
        this.firebaseSvc = firebaseSvc;
        this.showVocab = true;
    }
    ;
    AppComponent.prototype.ngOnInit = function () {
        console.log('vocab >> ngInit()');
        var voc = this;
        this.firebaseSvc.getUser2().subscribe(function (user) { return voc.user = user; });
    };
    AppComponent.prototype.login = function () {
        this.firebaseSvc.login();
    };
    ;
    AppComponent.prototype.logout = function () {
        this.firebaseSvc.logout();
    };
    ;
    AppComponent.prototype.editVocabulary = function () {
        this.showVocab = !this.showVocab;
    };
    AppComponent.prototype.getUser = function () {
        this.user = this.firebaseSvc.user;
        console.log(this.user);
        console.log('-------------------------');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_data_service__["a" /* FirebaseDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_firebase_data_service__["a" /* FirebaseDataService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_firebase_config__ = __webpack_require__("../../../../../src/app/services/firebase.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__vocab_vocab_component__ = __webpack_require__("../../../../../src/app/vocab/vocab.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_firebase_data_service__ = __webpack_require__("../../../../../src/app/services/firebase-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__vocab_edit_vocab_edit_component__ = __webpack_require__("../../../../../src/app/vocab-edit/vocab-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// import {MdInputModule} from '@angular/material';
// import {CdkTableModule} from "@angular/cdk/table";
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'vocabulary', component: __WEBPACK_IMPORTED_MODULE_9__vocab_vocab_component__["a" /* VocabComponent */] },
    { path: 'voc-edit', component: __WEBPACK_IMPORTED_MODULE_11__vocab_edit_vocab_edit_component__["a" /* VocabEditComponent */] },
    { path: 'contactus', redirectTo: 'contact' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__vocab_vocab_component__["a" /* VocabComponent */],
            __WEBPACK_IMPORTED_MODULE_11__vocab_edit_vocab_edit_component__["a" /* VocabEditComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_7__services_firebase_config__["a" /* firebaseConfig */]),
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuthModule */],
            // NgbModule.forRoot(),
            __WEBPACK_IMPORTED_MODULE_12__angular_router__["a" /* RouterModule */].forRoot(routes)
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__services_firebase_data_service__["a" /* FirebaseDataService */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/services/firebase-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__("../../../../firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FirebaseDataService = (function () {
    function FirebaseDataService(afAuth, afdb, fbApp) {
        this.afAuth = afAuth;
        this.afdb = afdb;
        this.fbApp = fbApp;
        this.msgVal = '';
        var fbThis = this;
        this.user2 = afAuth.authState;
        console.log('fb >> constructor >> user2: ');
        console.log(this.user2);
        fbThis.myVocabulary = afdb.list('/', {
            query: {
                limitToLast: 50
            }
        });
        __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                fbThis.user = user;
                console.log('fb >> constructor >> onAuthStateChanged >> user:');
                console.log(user);
                var path = fbThis.user.displayName.split(' ')[0];
                console.log('fb >> constructor >> onAuthStateChanged >> path - ' + path);
                fbThis.myVocabulary = afdb.list('/' + path + '/vocab', {
                    query: {
                        limitToLast: 50
                    }
                });
                console.log('fb >> constructor >> onAuthStateChanged >> myVocabulary: ');
                console.log(fbThis.myVocabulary);
            }
        });
    }
    FirebaseDataService.prototype.login = function () {
        var fbThis = this;
        console.log('fb >> login()');
        // this.afAuth.auth.signInAnonymously();
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GoogleAuthProvider())
            .then(function (result) {
            console.log('fb >> login successful. result:');
            console.log(result);
            console.log('fb >> login >> user:');
            fbThis.user = result.user;
            console.log('fb >> login successful. user:');
            console.log(fbThis.user);
            var path = fbThis.user.displayName.split(' ')[0];
            console.log('fb >> constructor >> onAuthStateChanged >> path - ' + path);
            fbThis.myVocabulary = fbThis.afdb.list('/' + path + '/vocab', {
                query: {
                    limitToLast: 50
                }
            });
        })
            .catch(function (err) {
            console.log('fb >> login error');
            console.log(err);
        });
        // this.user = this.afAuth.authState;
        console.log('fb >> login ended');
        console.log(this.user);
    };
    FirebaseDataService.prototype.logout = function () {
        console.log('fb >> logout()');
        this.afAuth.auth.signOut();
        this.user = null;
    };
    FirebaseDataService.prototype.saveVoc = function (voc) {
        console.log('fb >> saveVoc(' + voc + ')');
        this.myVocabulary.push(voc);
        // this.msgVal = '';
    };
    FirebaseDataService.prototype.getUser = function () {
        console.log('fb >> getUser()');
        console.log(this.user);
        return this.user;
    };
    FirebaseDataService.prototype.getUser2 = function () {
        console.log('fb >> getUser2()');
        console.log(this.user2);
        return this.user2;
    };
    FirebaseDataService.prototype.getVocabulary = function () {
        console.log('fb >> getVocabulary()');
        return this.myVocabulary;
    };
    return FirebaseDataService;
}());
FirebaseDataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2__["b" /* FirebaseApp */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2__["b" /* FirebaseApp */]) === "function" && _c || Object])
], FirebaseDataService);

var _a, _b, _c;
//# sourceMappingURL=firebase-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/firebase.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
// export const firebaseConfig = {
//     apiKey: "AIzaSyBAl6wAkyLhmv8zwbztJLg78zvNK-_RpZU",
//     authDomain: "gamification-inbev-staging.firebaseapp.com",
//     databaseURL: "https://gamification-inbev-staging.firebaseio.com",
//     storageBucket: "gamification-inbev-staging.appspot.com",
//     messagingSenderId: "118916305560"
// };
// export const firebaseConfig = {
//     apiKey: "AIzaSyCPH-X-FAsjEbP7xQgWyqpmJmMKBCyXDXM",
//     authDomain: "gamification-inbev-news-module.firebaseapp.com",
//     databaseURL: "https://gamification-inbev-news-module.firebaseio.com",
//     storageBucket: "gamification-inbev-news-module.appspot.com",
//     messagingSenderId: "644752656840"
// };
// export const firebaseConfig = {
var firebaseConfig = {
    apiKey: "AIzaSyAeVkfCJxpx6WdRGtaA0EbTSpZ5Vzq1KbE",
    authDomain: "vocabulary-trainer-77832.firebaseapp.com",
    databaseURL: "https://vocabulary-trainer-77832.firebaseio.com",
    projectId: "vocabulary-trainer-77832",
    storageBucket: "",
    messagingSenderId: "113984993788"
};
//# sourceMappingURL=firebase.config.js.map

/***/ }),

/***/ "../../../../../src/app/vocab-edit/vocab-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"ui header\">Add entry</h2>\r\n<div class=\"form-container\">\r\n  <form [formGroup]=\"vocabEntryForm\"\r\n        (ngSubmit)=\"onSubmit(vocabEntryForm.value)\"\r\n        class=\"ui form\"\r\n        [class.error]=\"!vocabEntryForm.valid && vocabEntryForm.touched\">\r\n\r\n    <div class=\"field\" [class.error]=\"!vocabEntryForm.get('word').valid && vocabEntryForm.get('word').touched\">\r\n      <label for=\"word\">word/sentence</label>\r\n      <input type=\"text\"\r\n             id=\"word\"\r\n             placeholder=\"word/sentence\"\r\n             [formControl]=\"vocabEntryForm.controls['word']\">\r\n      <div *ngIf=\"vocabEntryForm.controls['word'].hasError('required')\"\r\n           class=\"ui error message\">field can't be empty\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"field\"\r\n         [class.error]=\"!vocabEntryForm.get('definition').valid && vocabEntryForm.get('definition').touched\">\r\n      <label for=\"definition\">definition</label>\r\n      <input type=\"text\"\r\n             id=\"definition\"\r\n             placeholder=\"definition/sentence\"\r\n             [formControl]=\"vocabEntryForm.controls['definition']\">\r\n      <div *ngIf=\"vocabEntryForm.controls['definition'].hasError('required')\"\r\n           class=\"ui error message\">field can't be empty\r\n      </div>\r\n    </div>\r\n\r\n    <button type=\"submit\" class=\"ui button\">Submit</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/vocab-edit/vocab-edit.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.form-container .field {\n  /*height: 100px;*/\n  padding: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vocab-edit/vocab-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_firebase_data_service__ = __webpack_require__("../../../../../src/app/services/firebase-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vocab_voc_entry_models__ = __webpack_require__("../../../../../src/app/vocab/voc-entry.models.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VocabEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VocabEditComponent = (function () {
    function VocabEditComponent(formBuilder, firebaseSvc) {
        this.firebaseSvc = firebaseSvc;
        this.vocabEntryForm = formBuilder.group({
            'word': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'definition': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'author': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'nature': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'language': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'theme': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'example': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            'importance': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
    }
    VocabEditComponent.prototype.onSubmit = function (value) {
        var vocEntry = new __WEBPACK_IMPORTED_MODULE_3__vocab_voc_entry_models__["a" /* VocEntry */](value.word, value.definition, this.firebaseSvc.getUser().displayName, 'nature', 'language', 'theme', value.example, 3);
        console.log('you submitted value:', value.word);
        this.firebaseSvc.saveVoc(vocEntry);
        /*    value = {};
            this.vocabEntryForm.setValue({
              word:    '',
              definition: ''
            });*/
        this.vocabEntryForm.reset();
    };
    ;
    return VocabEditComponent;
}());
VocabEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-vocab-edit',
        template: __webpack_require__("../../../../../src/app/vocab-edit/vocab-edit.component.html"),
        styles: [__webpack_require__("../../../../../src/app/vocab-edit/vocab-edit.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_firebase_data_service__["a" /* FirebaseDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_firebase_data_service__["a" /* FirebaseDataService */]) === "function" && _b || Object])
], VocabEditComponent);

var _a, _b;
//# sourceMappingURL=vocab-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/vocab/voc-entry.models.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VocEntry; });
var VocEntry = (function () {
    function VocEntry(word, definition, author, nature, language, theme, example, importance) {
        this.word = word;
        this.definition = definition;
        this.author = author;
        this.nature = nature;
        this.language = language;
        this.theme = theme;
        this.example = example;
        this.importance = importance;
    }
    return VocEntry;
}());

//# sourceMappingURL=voc-entry.models.js.map

/***/ }),

/***/ "../../../../../src/app/vocab/vocab.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"vocabulary-container\">\r\n  <div class=\"search-input\">\r\n    <input type=\"text\"\r\n           id=\"searchStr\"\r\n           placeholder=\"search string\"\r\n           [(ngModel)]=\"searchStr\">\r\n  </div>\r\n  <div class=\"voc-entry\" *ngFor=\"let vocRecord of getVocabulary() | async\" [hidden]=\"filter(vocRecord)\">\r\n    <p class=\"front\">{{vocRecord.word}}</p>\r\n    <p class=\"back\">{{vocRecord.definition}}</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/vocab/vocab.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vocabulary-container {\n  max-width: 300px;\n  background-color: #dbdbdb;\n  margin: auto;\n  padding: 5px;\n}\n.vocabulary-container .voc-entry {\n  background-color: #f6f6f6;\n  text-align: left;\n  padding: 12px;\n  margin: 5px;\n}\n.vocabulary-container .voc-entry .front {\n  margin: 0;\n  margin-top: 1px;\n  color: red;\n  font-size: xx-large;\n}\n.vocabulary-container .voc-entry .back {\n  margin: 0;\n  color: blue;\n  margin-top: 5px;\n  margin-bottom: 1px;\n  margin-left: 5px;\n  font-size: large;\n}\n.vocabulary-container .voc-entry .example-card {\n  width: 400px;\n}\n.vocabulary-container .voc-entry .example-header-image {\n  background-size: cover;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/vocab/vocab.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_data_service__ = __webpack_require__("../../../../../src/app/services/firebase-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VocabComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VocabComponent = (function () {
    function VocabComponent(firebaseDataService) {
        this.firebaseDataService = firebaseDataService;
        this.searchStr = '';
    }
    ;
    VocabComponent.prototype.ngOnInit = function () {
    };
    VocabComponent.prototype.getVocabulary = function () {
        return this.firebaseDataService.getVocabulary();
    };
    VocabComponent.prototype.filter = function (entry) {
        var searchStr = this.searchStr.toLowerCase();
        return !(entry.word.toLowerCase().includes(searchStr) || entry.definition.toLowerCase().includes(searchStr));
    };
    return VocabComponent;
}());
VocabComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-vocab',
        template: __webpack_require__("../../../../../src/app/vocab/vocab.component.html"),
        styles: [__webpack_require__("../../../../../src/app/vocab/vocab.component.less")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_firebase_data_service__["a" /* FirebaseDataService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_data_service__["a" /* FirebaseDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_firebase_data_service__["a" /* FirebaseDataService */]) === "function" && _a || Object])
], VocabComponent);

var _a;
//# sourceMappingURL=vocab.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map