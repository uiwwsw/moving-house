import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  title = new BehaviorSubject<string>('');
  dropDownMenu = new BehaviorSubject<boolean>(false);
  toggleDropDownMenu() {
    this.dropDownMenu.next(!this.dropDownMenu.value);
  }
}
