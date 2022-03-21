import { CUSTOM_ELEMENTS_SCHEMA, Input, NgModule, OnInit } from '@angular/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ButtonComponent implements OnInit {
  @Input() type: string = 'text';
  constructor() {}

  ngOnInit(): void {}
}
