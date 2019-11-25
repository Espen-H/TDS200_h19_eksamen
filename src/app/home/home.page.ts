import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private user: string;

  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router,
    public toastController: ToastController,
    private route: ActivatedRoute,
  ) {
    {
      this.route.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          this.user = this.router.getCurrentNavigation().extras.state.post;
        }
      });
    }
  }




  async logout() {
    try {
      const result = await this.fireAuth.auth.signOut();
      this.presentToast('Logout successful');
      this.router.navigate(['login']);
    } catch (e) {
      console.warn(e);
    }
  }

  async presentToast(inputString: string) {
    const toast = await this.toastController.create({
      message: inputString,
      duration: 2000
    });
    toast.present();
  }

}
