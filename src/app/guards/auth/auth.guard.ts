import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  loggedIn: boolean = false;
  // ↓ 수정
  constructor(private router: Router, private auth: AuthService) {
    this.auth.user.subscribe((res) => {
      this.loggedIn = !!res;
    });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.loggedIn) {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}
