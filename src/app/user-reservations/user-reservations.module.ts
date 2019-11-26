import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UserReservationsPage } from './user-reservations.page';
import { ComponentsModule } from '../components/componets.modules';

const routes: Routes = [
  {
    path: '',
    component: UserReservationsPage
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
  declarations: [UserReservationsPage]
})
export class UserReservationsPageModule {}
