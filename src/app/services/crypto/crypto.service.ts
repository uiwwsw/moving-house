import { Injectable } from '@angular/core';
import { AES, enc } from 'crypto-js';
const YCW = 'dbsckddnjs870405';

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  encrypt(value: string) {
    return AES.encrypt(value, YCW).toString();
  }
  decrypt(value: string) {
    return AES.decrypt(value, YCW).toString(enc.Utf8);
  }
}
