import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  @Output() load: EventEmitter<void> = new EventEmitter(true);

  constructor() {}

  ngOnInit(): void {
    this.load.emit();
  }
}
