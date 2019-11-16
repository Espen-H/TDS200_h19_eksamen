import { Component, OnInit, Input } from '@angular/core';
import MeetingRoom from 'src/app/models/MeetingRoom';

@Component({
  selector: 'app-meeting-room-item',
  templateUrl: './meeting-room-item.component.html',
  styleUrls: ['./meeting-room-item.component.scss'],
})
export class MeetingRoomItemComponent implements OnInit {

  @Input() meetingRoomData: MeetingRoom;


  constructor() { }

  ngOnInit() {}

}
