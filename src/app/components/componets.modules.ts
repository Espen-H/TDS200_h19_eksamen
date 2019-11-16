import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MeetingRoomItemComponent } from './meeting-room-item/meeting-room-item.component';

@NgModule({
imports: [IonicModule],
declarations: [MeetingRoomItemComponent, ],
exports: [MeetingRoomItemComponent, ]
})

export class ComponentsModule {}
