import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NgxMercadopagoService } from 'ngx-mercadopago';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  constructor(  public modalCtrl: ModalController,
                private ngxMpService: NgxMercadopagoService ) { }

  async ngOnInit() {
    await this.ngxMpService.initialize();
  }

  dismissModal(){
    this.modalCtrl.dismiss();
  }
}
