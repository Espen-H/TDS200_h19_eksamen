import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AngularFirestore } from '@angular/fire/firestore';
import meetingRoom from '../models/MeetingRoom';
import { AngularFireStorage } from '@angular/fire/storage';
import { v4 as uuid } from 'uuid';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';
import MeetingRoom from '../models/MeetingRoom';
import { firestore } from 'firebase';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-new-room',
  templateUrl: './new-room.page.html',
  styleUrls: ['./new-room.page.scss'],
})
export class NewRoomPage implements OnInit {


  private cameraPreview = '';
  private data;
  private latitude;
  private longtitude;
  private address;
  private title: string;
  private capacity: number;

  constructor(

    private camera: Camera,
    private geolocation: Geolocation,
    private firestorage: AngularFireStorage,
    // tslint:disable-next-line: no-shadowed-variable
    private firestore: AngularFirestore,
    private firebaseAuth: AngularFireAuth,
    public toastController: ToastController) {
  }

  ngOnInit() {
  }



  async takePicture() {
    try {
      const cameraOptions: CameraOptions = {
        quality: 100,
        correctOrientation: true,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
      };
      const image = await this.camera.getPicture(cameraOptions);
      this.cameraPreview = image;
    } catch (e) {
      console.log('error with takePicture() ' + e);
    }
  }

  async getLocation() {
    try {
      await this.geolocation.getCurrentPosition().then((resp) => {
        this.latitude = resp.coords.latitude;
        this.longtitude = resp.coords.longitude;
      }
      );
      const url = 'https://nominatim.openstreetmap.org/reverse?format=json&lat=' +
        this.latitude + '&lon=' + this.longtitude + '&zoom=18&addressdetails=1';
      this.getAddressFromGps(url);

    } catch (e) {
      console.log('Error getting location ' + e);
    }
  }


  async getAddressFromGps(url: string) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      this.address = data.display_name;

    } catch (err) {
      console.log('fetch failed', err);
    }
  }

  async uploadImageToFirebase() {
    const filename = `tds-${uuid()}.png`;
    const firestorageFileref = this.firestorage.ref(filename);
    const uploadTask = firestorageFileref.putString(
      this.cameraPreview, 'base64', { contentType: 'image/png' }
    );
    await uploadTask.then();
    return firestorageFileref.getDownloadURL().toPromise();
  }


  async postDataToFirebase() {

    try {
      const uploadedImageUrl = await this.uploadImageToFirebase();
      const roomCollectionref = this.firestore.collection<MeetingRoom>('rooms');
      const location = new firestore.GeoPoint(this.latitude, this.longtitude);
      const owner = this.firebaseAuth.auth.currentUser.uid;
      const randomId = owner + uuid();

      await roomCollectionref.doc(randomId).set({
        id: randomId,
        title: this.title,
        bilde: uploadedImageUrl,
        adresse: this.address,
        lokasjon: location,
        kapasitet: this.capacity,
        eier: owner,
        ledig: true,
        leietaker: ''
      });
      this.presentToast('Room published');
    } catch (error) {
      this.presentToast('Something went wrong');

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
