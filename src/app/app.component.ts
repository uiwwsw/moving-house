import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loading = false;
  constructor() {}
  async click() {
    this.loading = true;
    await new Promise((resolve) => setTimeout(() => resolve(true), 5000));
    this.loading = false;
  }
}
