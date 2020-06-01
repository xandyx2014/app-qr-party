import { Injectable } from '@angular/core';
import { ToastController, AlertController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {

  constructor(
    private toastController: ToastController,
    private alertController: AlertController,
    private loadingController: LoadingController
  ) { }
  async presentToast(mensaje: string, duracion = 2000) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: duracion
    });
    toast.present();
  }
  async presentAlert(header, subHeader, message) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class-alert',
      header,
      subHeader,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 5000
    });
    await loading.present();
    return loading;
  }
}
