



import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import MeetingRoom from '../models/MeetingRoom';

@Component({
  selector: 'app-user-rooms',
  templateUrl: './user-rooms.page.html',
  styleUrls: ['./user-rooms.page.scss'],
})
export class UserRoomsPage implements OnInit {

  private rooms$: Observable<MeetingRoom[]>;
  private currentUser;

  constructor(
    private firestore: AngularFirestore,
    private router: Router,
    private dataService: DataService,
    private firebaseAuth: AngularFireAuth
  ) { }

  ngOnInit() {
    this.rooms$ = this.firestore.collection('rooms').valueChanges() as Observable<MeetingRoom[]>;
    this.currentUser = this.firebaseAuth.auth.currentUser.uid;
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
