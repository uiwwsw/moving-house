import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from '../storage/storage.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private auth: AngularFireAuth,
    private cookie: CookieService,
    private router: Router
  ) {
    this.auth.user.subscribe((user) => {
      this.cookie.set('user', user);
      this.user.next(user);
      user && this.router.url === '/sign' && this.router.navigate(['/']);
    });
  }
  // user = new Observable<firebase.User | null>(
  //   (observer: Observer<firebase.User | null>) => {
  //     const cookieUser = this.cookie.get<firebase.User>('user');
  //     observer.next(cookieUser);
  //   }
  // );
  user = new BehaviorSubject<firebase.User | null>(this.cookie.get('user'));

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
