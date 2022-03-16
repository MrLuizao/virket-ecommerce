import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CheckoutModel } from 'src/app/Models/checkout.model';
import { BehaviorService } from 'src/app/Services/behavior.service';
import { PaymentService } from 'src/app/Services/payment.service';
import { PaymentPage } from '../modals/payment/payment.page';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  modelCheckout: CheckoutModel;
  access_token: any;
  urlPayOrder: any;

  cartProducts = [];
  arrayPrices = [];
  totalPrice: number;

  constructor(  public behaviorSrv: BehaviorService,
                public paymentService: PaymentService,
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


  goPaymentLink(){
    this.getTokenToPay();

    this.modelCheckout.unique = true;
    this.modelCheckout.response = true;
    this.modelCheckout.reference = "123_Test";
    this.modelCheckout.urlCallback = "https://fieston.lat/payment-result";
    this.modelCheckout.expiration = "2022-05-29";
    this.modelCheckout.currency = '484';
    this.modelCheckout.amount = 1.1;

    this.paymentService.postCheckoutGenrate(this.access_token, this.modelCheckout).subscribe( (data)=>{
      console.log('COMPLETE =>',data); 

      this.urlPayOrder = data['dataResponse'].payOrder;

      location.replace(`https://sandbox-ecommerce.blumonpay.net${this.urlPayOrder}`);
      
    }, (error)=>{
      console.error(error);
    });
  }

  getTokenToPay(){
    this.paymentService.postTokenEcomerce().subscribe( (resp)=>{
      console.log('RESPUESTA DEL SERVICIO:',resp);
      this.access_token = resp['access_token'];
    }, (error)=>{
        console.error('ERROR EN LA RESPUESTA:',error);
    });
  }

}
