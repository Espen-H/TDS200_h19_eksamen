import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import MeetingRoom from '../models/MeetingRoom';
import { DataService } from '../services/data.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.page.html',
  styleUrls: ['./detail-view.page.scss'],
})
export class DetailViewPage implements OnInit {

  private room: MeetingRoom;

  constructor(
    private firestore: AngularFirestore, 
    private route: ActivatedRoute, 
    private router: Router, 
    private dataService: DataService,
    private firebaseAuth: AngularFireAuth,
    ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.room = this.router.getCurrentNavigation().extras.state.post as MeetingRoom;
      }
    });
  }


  reserverRom() {
   const dbList = this.firestore.collection<MeetingRoom>('rooms');
   const dbItem = dbList.doc(this.room.id)
   const user = this.firebaseAuth.auth.currentUser.uid
   dbItem.update({ledig: false , leietaker: user});
  }

  ngOnInit() { }
}
