import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header/header.service';
import { ScrollMixin } from 'src/app/mixins/scroll/scroll.mixin';
import { HouseService } from 'src/app/services/house/house.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent extends ScrollMixin implements OnInit {
  constructor(
    private headerService: HeaderService,
    public houseService: HouseService
  ) {
    super();
    this.headerService.title.next('움직이는하우스');
  }
  test() {}

  override onScrollAtBottom() {
    this.loadingAtBottom = true;
    console.log('djawdjlawjdkawdljdlwkj');
    setTimeout(() => {
      this.loadingAtBottom = false;
    }, 3000);
  }
  list = [];
  ngOnInit(): void {}
}
