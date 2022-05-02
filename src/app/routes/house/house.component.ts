import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header/header.service';
import { ScrollMixin } from 'src/app/mixins/scroll/scroll.mixin';
import { HouseService } from 'src/app/services/house/house.service';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.scss'],
})
export class HouseComponent extends ScrollMixin implements OnInit {
  constructor(
    private headerService: HeaderService,
    public authService: AuthService,
    public houseService: HouseService
  ) {
    super();
    this.headerService.title.next('움직이는하우스');
  }
  test() {}
  override onScrollAtBottom() {
    this.loadingAtBottom = true;
    setTimeout(() => {
      this.loadingAtBottom = false;
    }, 3000);
  }
  list = [];
  ngOnInit(): void {}
}
