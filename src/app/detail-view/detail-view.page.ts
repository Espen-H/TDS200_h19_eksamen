import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import MeetingRoom from '../models/MeetingRoom';
import { DataService } from '../services/data.service';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.page.html',
  styleUrls: ['./detail-view.page.scss'],
})
export class DetailViewPage implements OnInit {

  private room: MeetingRoom;

  constructor(private firestore: AngularFirestore, private route: ActivatedRoute, private router: Router, private dataService: DataService) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.room = this.router.getCurrentNavigation().extras.state.post as MeetingRoom;
      }
    });
  }


  reserverRom() {
   const dbItem = firebase.database().ref('/rooms/'+this.room.id);
   console.log(dbItem)
   const user = firebase.auth().currentUser
   console.log(user)
   dbItem.update({ledig: false , leietaker: user});
  }

  ngOnInit() { }
}
