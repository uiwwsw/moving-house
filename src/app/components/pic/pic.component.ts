import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pic',
  templateUrl: './pic.component.html',
  styleUrls: ['./pic.component.scss'],
})
export class PicComponent implements OnInit {
  @Input() src: string = '';
  @Input() alt: string = '이미지의 정보가 없습니다.';
  @Input() width: number = 0;
  @Input() height: number = 0;
  loaded = false;

  constructor() {}
  // onLoad() {
  //   this.loaded = true;
  // }

  ngOnInit(): void {}
}
