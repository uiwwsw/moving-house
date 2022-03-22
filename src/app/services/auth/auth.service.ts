import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from '../storage/storage.service';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
export interface UserInfo {
  admin?: true;
  mobilityHouses?: string[];
  uid: string;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userInfoDoc?: AngularFirestoreDocument<UserInfo>;
  userInfo?: BehaviorSubject<UserInfo | undefined>;
  // userInfo = new BehaviorSubject<UserInfo | undefined>(undefined);
  // private itemsCollection: AngularFirestoreCollection<any>;
  loggedIn: boolean | null = null;
  constructor(
    private afs: AngularFirestore,
    private auth: AngularFireAuth // private router: Router
  ) {
    this.auth.user.subscribe((user) => {
      if (user) {
        this.loggedIn = true;
        this.userInfo = new BehaviorSubject<UserInfo | undefined>(undefined);
        this.userInfoDoc = afs.doc<UserInfo>(`users/${user.uid}`);
        this.userInfoDoc
          .valueChanges()
          .subscribe((x) => this.userInfo!.next(x));
      } else {
        this.loggedIn = false;
        this.userInfo?.next(undefined);
        this.userInfo?.complete();
      }
    });

    // this.userInfo.subscribe((x) => {
    //   console.log(x, 'djawkldjawkjdlkawjdawd');
    // });
    // this.itemsCollection = afs.collection<any>('users');
    // this.items = this.itemsCollection.valueChanges();
    // const col = collection(firestore, 'users');
    // this.item$ = collectionData(col);
  }
  // user = new Observable<firebase.User | null>(
  //   (observer: Observer<firebase.User | null>) => {
  //     const cookieUser = this.cookie.get<firebase.User>('user');
  //     observer.next(cookieUser);
  //   }
  // );
  // user = new BehaviorSubject<firebase.User | null>(this.cookie.get('user'));
  // userInfo = new BehaviorSubject<UserInfo | undefined>(undefined);

  onLogin() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

    // this.auth
    //   .signInWithPhoneNumber(
    //     '+821021936087',
    //     new firebase.auth.RecaptchaVerifier('ddd')
    //   )
    //   .then(async (confirmationResult) => {
    //     // SMS sent. Prompt user to type the code from the message, then sign the
    //     // user in with confirmationResult.confirm(code).
    //     // window.confirm()
    //     const d = window.prompt() as string;
    //     confirmationResult.confirm(d);
    //     // ...
    //   });
  }
  onLogout() {
    this.auth.signOut();
  }
}
