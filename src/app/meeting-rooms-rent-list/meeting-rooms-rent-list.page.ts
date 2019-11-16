
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import MeetingRoom from '../models/MeetingRoom';

@Component({
  selector: 'app-meeting-rooms-rent-list',
  templateUrl: './meeting-rooms-rent-list.page.html',
  styleUrls: ['./meeting-rooms-rent-list.page.scss'],
})
export class MeetingRoomsRentListPage implements OnInit {

  private rooms$: Observable<MeetingRoom[]>;

  constructor(private firestore: AngularFirestore, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.rooms$ = this.firestore.collection('rooms').valueChanges() as Observable<MeetingRoom[]>;
  }

  openDetailsWithState(tappedPost: MeetingRoom) {
    const navigationExtras: NavigationExtras = {
      state: {
        post: tappedPost
      }
    };
    this.router.navigate(['detail-view'], navigationExtras);
  }

}
