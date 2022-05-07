import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { NgModel } from '@angular/forms';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss'],
})
export class UploaderComponent implements OnInit {
  @Input() directory: string = '';
  @Input() id: string = '';
  @Input() downloadURL: string = '';
  @Output() downloadURLChange = new EventEmitter<string>();
  uploadPercent: Observable<number | undefined> | undefined;
  constructor(private storage: AngularFireStorage) {}

  ngOnInit(): void {}

  uploadFile(event: Event) {
    if (!(event.target instanceof HTMLInputElement)) return;
    const files = event.target.files;
    const file = files ? files[0] : '';

    if (!file) return;
    const filePath = `/${this.directory}/${this.id}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task
      .snapshotChanges()
      .pipe(
        finalize(() =>
          fileRef
            .getDownloadURL()
            .subscribe((x) => this.downloadURLChange.emit(x))
        )
      )
      .subscribe();
  }
}
