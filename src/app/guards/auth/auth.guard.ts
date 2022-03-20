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
  UserLogedIn: boolean = false;
  // ↓ 수정
  constructor(private router: Router, private auth: AuthService) {
    this.auth.user.subscribe((res) => {
      this.UserLogedIn = !!res;
    });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.UserLogedIn) {
      this.router.navigate(['/']);
      return true;
    }

    return false;
  }
}
