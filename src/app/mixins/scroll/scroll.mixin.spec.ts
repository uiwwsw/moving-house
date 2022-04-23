import { TestBed } from '@angular/core/testing';
import { ScrollMixin } from './scroll.mixin';

describe('ScrollMixin', () => {
  let service: ScrollMixin;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollMixin);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
