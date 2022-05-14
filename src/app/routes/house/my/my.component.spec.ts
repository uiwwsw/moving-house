import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseMyComponent } from './my.component';

describe('HouseMyComponent', () => {
  let component: HouseMyComponent;
  let fixture: ComponentFixture<HouseMyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HouseMyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseMyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
