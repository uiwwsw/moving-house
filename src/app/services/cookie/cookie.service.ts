import { Injectable } from '@angular/core';
import Cookies from 'js-cookie';

@Injectable({
  providedIn: 'root',
})
export class CookieService {
  set(key: string, value: string | Object | null | undefined) {
    if (value) Cookies.set(key, JSON.stringify(value));
    else this.remove(key);
  }
  get<T>(key: string) {
    const value = Cookies.get(key);
    if (value) return JSON.parse(value) as T;
    return null;
  }
  remove(key: string) {
    Cookies.remove(key);
  }
}
