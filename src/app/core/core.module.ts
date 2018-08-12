import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule, FirebaseApp } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireStorageModule } from 'angularfire2/storage';
import { environment } from "../../environments/environment";
export const firebaseConfig = environment.firebaseConfig;
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFontAwesomeModule,
  ],
  exports: [
    CommonModule,
    AngularFireModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFontAwesomeModule,
  ],
  providers: [
    AuthService
  ],
  declarations: []
})
export class CoreModule { }
