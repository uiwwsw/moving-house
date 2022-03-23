import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header/header.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  constructor(private headerService: HeaderService) {
    this.headerService.title.next('움직이는하우스');
  }

  ngOnInit(): void {}
}
