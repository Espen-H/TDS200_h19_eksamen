import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private user = { username: '', password: '' };

  constructor(private fireAuth: AngularFireAuth, private router: Router, public toastController: ToastController) {
  }

  async presentToast(inputString: string) {
    const toast = await this.toastController.create({
      message: inputString,
      duration: 2000
    });
    toast.present();
  }

  async loginUser() {
    try {
      const result = await this.fireAuth.auth.signInWithEmailAndPassword(this.user.username, this.user.password);
      this.presentToast('Welcome back ' + this.user.username);
      const navigationExtras: NavigationExtras = {
        state: {
          post: this.user.username
        }
      };
      this.router.navigate(['home'], navigationExtras);
    } catch (e) {
      console.warn(e);
    }
  }

  async registerUser() {
    try {
      const result = await this.fireAuth.auth.createUserWithEmailAndPassword(this.user.username, this.user.password);
      this.presentToast('Your account have been registered.');
      this.router.navigate(['home']);
    } catch (e) {
      console.warn(e);

    }
  }


  ngOnInit() {
  }



}
