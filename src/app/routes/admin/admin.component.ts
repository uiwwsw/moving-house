import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/services/header/header.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(private headerService: HeaderService) {
    this.headerService.title.next('관리자 페이지');
  }

  ngOnInit(): void {}
}
