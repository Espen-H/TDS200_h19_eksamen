import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import MeetingRoom from '../models/MeetingRoom';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.page.html',
  styleUrls: ['./detail-view.page.scss'],
})
export class DetailViewPage implements OnInit {

  private room: MeetingRoom;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.room = this.router.getCurrentNavigation().extras.state.post as MeetingRoom;
      }
    });
  }

  ngOnInit() { }
}
