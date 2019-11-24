import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private fireAuth: AngularFireAuth, private router: Router, public toastController: ToastController) { }


  async logout() {
    try {
      const result = await this.fireAuth.auth.signOut()
      this.presentToast("Logout successful");
      this.router.navigate(['login']);
    } catch (e) {
      console.warn(e);
    }
  }

async presentToast(message: string) {
  const toast = await this.toastController.create({
    message: message,
    duration: 2000
  });
  toast.present();
}

}
