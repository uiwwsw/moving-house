import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() src: string = '';
  @Input() alt: string = '';
  @Input() width: number = 0;
  @Input() height: number = 0;
  @Input() name: string = '이름 없음';
  @Input() tag: string[] = [];
  @Input() price?: number;
  constructor() {}
  get isTags() {
    return this.tag.map((x) => `#${x}`).join(' ');
  }

  ngOnInit(): void {}
}
