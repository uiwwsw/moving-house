import { Injectable } from '@angular/core';

import Cookies from 'js-cookie';
import { CryptoService } from '../crypto/crypto.service';

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
  constructor(private cryptoService: CryptoService) {}
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
      storage.set(key, this.cryptoService.encrypt(JSON.stringify(value)), {
        expires: payload?.expires,
      });
    else this.remove(key);
  }
  get<T>(key: string, type: STORAGE_TYPE = STORAGE_TYPE.LOCAL) {
    const storage = this.getStorage(type);
    const value = storage.get(key);
    if (value) return JSON.parse(this.cryptoService.decrypt(value)) as T;
    return undefined;
  }
  remove(key: string, type: STORAGE_TYPE = STORAGE_TYPE.LOCAL) {
    const storage = this.getStorage(type);
    storage.remove(key);
  }
}
