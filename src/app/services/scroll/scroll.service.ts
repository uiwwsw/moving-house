import { HostListener, Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: Event) {}
}
