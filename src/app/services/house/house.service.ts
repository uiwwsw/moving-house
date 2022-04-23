import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { StorageService } from '../storage/storage.service';

export interface House {
  updated_at: firebase.firestore.Timestamp;
  created_at: firebase.firestore.Timestamp;
  desc: string[];
  images: string[];
  phone?: string;
  price?: number;
  title: string;
  uid: string;
}
@Injectable({
  providedIn: 'root',
})
export class HouseService {
  private houseColl: AngularFirestoreCollection<House>;
  public houses: Observable<House[]>;
  // private houseCollRef: Subscription;
  // house: BehaviorSubject<House[]>;
  constructor(private afs: AngularFirestore) {
    // this.house = new BehaviorSubject<House[]>([]);
    this.houseColl = afs.collection<House>('houses');
    this.houses = this.houseColl.valueChanges();
  }

  // private houseColl: AngularFirestoreCollection<House>;
  // // public houses: Observable<House[]>;
  // private houseCollRef: Subscription;
  // house: BehaviorSubject<House[]>;
  // constructor(private afs: AngularFirestore) {
  //   this.house = new BehaviorSubject<House[]>([]);
  //   this.houseColl = afs.collection<House>('houses');
  //   this.houseCollRef = this.houseColl.valueChanges().subscribe((x) => {
  //     console.log('항자우자우장');
  //     this.house.next(x);
  //   });
  //   // this.houses = this.houseColl.valueChanges();
  // }
}
