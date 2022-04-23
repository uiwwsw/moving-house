import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll',
  template: '<div></div>',
  styleUrls: [],
})
export class ScrollMixin {
  bottomMargin = 100;
  loadingAtBottom = false;
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
    const { scrollY, innerHeight } = window;
    const { scrollHeight } = document.body;
    if (
      !this.loadingAtBottom &&
      scrollY + innerHeight + this.bottomMargin > scrollHeight
    )
      this.onScrollAtBottom();
  }

  onScrollAtBottom() {}
}
