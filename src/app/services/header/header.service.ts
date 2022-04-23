import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export enum DROP_MENU_ACTION {
  LOGOUT = '로그아웃',
}
@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  // @ViewChild('dropDownMenu')
  // dropDownMenuElement?: ElementRef<HTMLDivElement>;

  title = new BehaviorSubject<string>('');
  dropDownMenu = new BehaviorSubject<boolean>(false);
}
