import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor( private toastCtrl: ToastController ) { }

  async showToast(msg: string,  position?: 'top' | 'bottom' | 'middle') {
    if(position === undefined){
      position = "bottom";
    }
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: position,
    });
    toast.present();
  }
}
