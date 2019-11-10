import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private user = { username: '', password: ''};

  constructor(private fireAuth: AngularFireAuth, private router: Router) {
   }

  async loginUser() {
    try {
      const result = await this.fireAuth.auth.signInWithEmailAndPassword(this.user.username, this.user.password);
      this.router.navigate(['home']);
    } catch (e) {
      console.warn(e);
    }
   }

  async registerUser() {
    try {
      const result = await this.fireAuth.auth.createUserWithEmailAndPassword(this.user.username, this.user.password);
      this.router.navigate(['home']);
    } catch (e) {
      console.warn(e);

    }
   }


  ngOnInit() {
  }



}
