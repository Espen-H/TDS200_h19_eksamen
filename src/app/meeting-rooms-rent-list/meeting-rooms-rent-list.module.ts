import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../components/componets.modules';

import { MeetingRoomsRentListPage } from './meeting-rooms-rent-list.page';

const routes: Routes = [
  {
    path: '',
    component: MeetingRoomsRentListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MeetingRoomsRentListPage]
})
export class MeetingRoomsRentListPageModule {}
