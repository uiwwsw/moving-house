import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import {
  HeaderService,
  DROP_MENU_ACTION,
} from 'src/app/services/header/header.service';

// import {
//   trigger,
//   state,
//   style,
//   animate,
//   transition,
//   // ...
// } from '@angular/animations';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // animations: [
  //   trigger('openClose', [
  //     state(
  //       'open',
  //       style({
  //         display: 'block',
  //       })
  //     ),
  //     state(
  //       'closed',
  //       style({
  //         display: 'none',
  //       })
  //     ),
  //     transition('open => closed', [animate('1s')]),
  //     transition('closed => open', [animate('0.5s')]),
  //   ]),
  // ],
})
export class HeaderComponent implements OnInit {
  get isDropMenuList() {
    return Object.values(DROP_MENU_ACTION);
  }
  constructor(
    public authService: AuthService,
    public headerService: HeaderService,
    private router: Router
  ) {}

  goPage(path: string) {
    this.router.navigate([path]);
  }
  showDropDownMenu() {
    this.headerService.dropDownMenu.next(true);
  }
  hideDropDownMenu(event?: MouseEvent) {
    const buttonElement = event?.target as HTMLButtonElement | undefined;
    if (buttonElement?.textContent)
      switch (buttonElement?.textContent) {
        case DROP_MENU_ACTION.LOGOUT:
          this.authService.onLogout();
          break;
      }
    this.headerService.dropDownMenu.next(false);
  }
  ngOnInit(): void {}
}
