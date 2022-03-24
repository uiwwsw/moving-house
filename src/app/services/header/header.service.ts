import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  // @ViewChild('dropDownMenu')
  // dropDownMenuElement?: ElementRef<HTMLDivElement>;

  title = new BehaviorSubject<string>('');
  dropDownMenu = new BehaviorSubject<boolean>(false);
  showDropDownMenu() {
    this.dropDownMenu.next(true);
  }
  hideDropDownMenu() {
    this.dropDownMenu.next(false);
  }
}
