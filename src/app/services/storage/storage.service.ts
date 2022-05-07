import { Injectable } from '@angular/core';
import { AES, enc } from 'crypto-js';
import Cookies from 'js-cookie';
const YCW = 'dbsckddnjs870405';
interface Payload {
  expires?: number;
  session?: true;
}

enum STORAGE_TYPE {
  LOCAL,
  SESSION,
  COOKIE,
}
@Injectable({
  providedIn: 'root',
})
export class StorageService {
  getStorage(type: STORAGE_TYPE) {
    if (type === STORAGE_TYPE.COOKIE) return Cookies;
    let storage = localStorage;
    if (type === STORAGE_TYPE.SESSION) storage = sessionStorage;
    return {
      get: (key: string) => storage.getItem(key),
      set: (key: string, value: string, _?: Cookies.CookieAttributes) =>
        storage.setItem(key, value),
      remove: (key: string) => storage.removeItem(key),
    };
  }
  set(
    key: string,
    value: string | Object | null | undefined,
    payload?: Payload
  ) {
    let type = STORAGE_TYPE.LOCAL;
    if (payload?.expires) type = STORAGE_TYPE.COOKIE;
    if (payload?.session) type = STORAGE_TYPE.SESSION;

    const storage = this.getStorage(type);
    if (value)
      storage.set(key, AES.encrypt(JSON.stringify(value), YCW).toString(), {
        expires: payload?.expires,
      });
    else this.remove(key);
  }
  get<T>(key: string, type: STORAGE_TYPE = STORAGE_TYPE.LOCAL) {
    const storage = this.getStorage(type);
    const value = storage.get(key);
    if (value)
      return JSON.parse(AES.decrypt(value, YCW).toString(enc.Utf8)) as T;
    return undefined;
  }
  remove(key: string, type: STORAGE_TYPE = STORAGE_TYPE.LOCAL) {
    const storage = this.getStorage(type);
    storage.remove(key);
  }
}
