import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { BehaviorSubject, Subscription } from 'rxjs';
import { debounceTime, last, take } from 'rxjs/operators';
import { StorageService } from '../storage/storage.service';

export interface UserInfo {
  uid: string;
  admin?: true;
  houses?: string[];
  updated?: firebase.firestore.Timestamp;
  created: firebase.firestore.Timestamp;
}
// export enum ADMIN {
//   MANAGER = 1,
//   OWNER = 100,
// }
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userInfoDoc?: AngularFirestoreDocument<UserInfo>;
  private userInfoDocRef?: Subscription;
  public userInfo: BehaviorSubject<UserInfo | undefined>;
  // userInfo = new BehaviorSubject<UserInfo | undefined>(undefined);
  // private itemsCollection: AngularFirestoreCollection<any>;
  get isLoggedIn() {
    return !!this.userInfo.value;
  }
  constructor(
    private afs: AngularFirestore,
    private auth: AngularFireAuth,
    private storage: StorageService,
    private router: Router
  ) {
    const userInfo = this.storage.get<UserInfo>('userInfo');
    this.userInfo = new BehaviorSubject<UserInfo | undefined>(userInfo);
    this.auth.user.subscribe((user) => {
      if (user) {
        this.userInfoDoc = afs.doc<UserInfo>(`users/${user.uid}`);
        this.userInfoDocRef = this.userInfoDoc
          .valueChanges()
          .pipe(debounceTime(500))
          .subscribe((x) => {
            this.userInfo.next(x);
            this.storage.set('userInfo', x);
          });
      } else {
        this.userInfoDocRef?.unsubscribe();
        this.userInfo.next(undefined);
        this.storage.remove('userInfo');
      }
    });
  }
  // user = new Observable<firebase.User | null>(
  //   (observer: Observer<firebase.User | null>) => {
  //     const cookieUser = this.cookie.get<firebase.User>('user');
  //     observer.next(cookieUser);
  //   }
  // );
  // user = new BehaviorSubject<firebase.User | null>(this.cookie.get('user'));
  // userInfo = new BehaviorSubject<UserInfo | undefined>(undefined);
  // onVerifyPhone(phone: string) {
  //   this.auth
  //     .signInWithPhoneNumber(
  //       phone,
  //       new firebase.auth.RecaptchaVerifier('phone')
  //     )
  //     .then(async (confirmationResult) => {
  //       const d = window.prompt() as string;
  //       confirmationResult.confirm(d);
  //     });
  // }
  onLogin() {
    this.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((x) => {
        const uid = x.user!.uid;
        const signupObserver = this.afs
          .doc<UserInfo>(`users/${uid}`)
          .valueChanges()
          .subscribe((user) => {
            if (!user)
              this.userInfoDoc!.set({
                uid,
                created: firebase.firestore.Timestamp.now(),
              });
            signupObserver.unsubscribe();
          });
        this.router.navigate(['/']);
      });
  }
  onLogout() {
    this.auth.signOut();
  }

  onDelete() {
    const auth = firebase.auth();
    auth.currentUser?.delete();
    this.userInfoDoc?.delete();
    // TODO 이미지 파일 및 하우스 삭제 해야함
    // this.auth
    // this.auth.
  }
}
