import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';




const firebaseConfig = {
  apiKey: 'AIzaSyCXPkydAbQDBXClHI35-T2Mq4IImfCUcaU',
  authDomain: 'tds200eksamen-76534.firebaseapp.com',
  databaseURL: 'https://tds200eksamen-76534.firebaseio.com',
  projectId: 'tds200eksamen-76534',
  storageBucket: 'tds200eksamen-76534.appspot.com',
  messagingSenderId: '190502088291',
  appId: '1:190502088291:web:9e32e38c02a3320dd3d256'
};


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    AngularFireAuthGuardModule,

  ],

  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],


  bootstrap: [AppComponent]
})
export class AppModule {}
