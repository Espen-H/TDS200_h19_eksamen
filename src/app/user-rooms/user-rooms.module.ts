import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UserRoomsPage } from './user-rooms.page';
import { ComponentsModule } from '../components/componets.modules';

const routes: Routes = [
  {
    path: '',
    component: UserRoomsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UserRoomsPage]
})
export class UserRoomsPageModule {}
