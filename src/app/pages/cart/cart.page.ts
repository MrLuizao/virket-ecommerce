import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorService } from 'src/app/Services/behavior.service';
import { PaymentPage } from '../modals/payment/payment.page';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cartProducts = [];
  arrayPrices = [];
  totalPrice: number;

  constructor(  public behaviorSrv: BehaviorService,
                public modalController: ModalController ) { }

  ngOnInit() {
    this.behaviorSrv.$getArrayList.subscribe( (items)=>{
      
      this.cartProducts = items;
      this.arrayPrices = this.cartProducts.map( item => {return item.price});
      this.totalPrice = this.arrayPrices.reduce((a, b) => a + b, 0);

    });
  }

  deleteProductItem(){
    this.cartProducts.pop()
    this.behaviorSrv.bindingProductsArray(this.cartProducts)
  }

  async openModalPayment() {
    const modal = await this.modalController.create({
      component: PaymentPage,
    });
    return await modal.present();
  }

}
