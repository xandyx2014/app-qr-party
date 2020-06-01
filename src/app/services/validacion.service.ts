import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ValidacionService {

  constructor(
    private loadingController: LoadingController
  ) { }
  async validar() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class-loading',
      message: 'Validando...',
      duration: 2000
    });
    await loading.present();

    // const { role, data } = await loading.onDidDismiss();
    // console.log('Loading dismissed!');
  }
}
