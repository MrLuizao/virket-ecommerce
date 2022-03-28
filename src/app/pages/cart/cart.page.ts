import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CheckoutModel } from 'src/app/Models/checkout.model';
import { DeleteItemAction } from 'src/app/Redux/actions/cart-item.action';
import { BehaviorService } from 'src/app/Services/behavior.service';
import { PaymentService } from 'src/app/Services/payment.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  reduxObj$: Observable<any>

  modelCheckout: CheckoutModel;
  access_token: any;
  urlPayOrder: any;

  loading: boolean;
  cartProducts = [];
  arrayPrices = [];
  totalPrice: number;

  constructor(  public behaviorSrv: BehaviorService,
                public paymentService: PaymentService,
                public modalController: ModalController,
                private store: Store<any> ) { }

  ngOnInit() {

    this.reduxObj$ = this.store.select(store => store.cart);
    this.reduxObj$.subscribe( (data)=>{
      this.cartProducts = data;
      this.arrayPrices = this.cartProducts.map( item => {return item.price});
      this.totalPrice = this.arrayPrices.reduce((a, b) => a + b, 0);
    });

  }

  deleteProductItem(id){
    this.store.dispatch( new DeleteItemAction(id));
  }

  getTokenToPay(){
    this.loading = true;
    
    this.paymentService.postTokenEcomerce().subscribe( (resp)=>{
      console.log('RESPUESTA DEL SERVICIO:',resp);
      this.access_token = resp['access_token'];

      this.goPaymentLink();

    }, (error)=>{
      this.loading = false;
      console.error('ERROR EN LA RESPUESTA:',error);
    });
  }

  goPaymentLink(){

    this.modelCheckout.unique = true;
    this.modelCheckout.response = true;
    this.modelCheckout.reference = "123_Test";
    this.modelCheckout.urlCallback = "https://virket-1ee70.web.app/home";
    this.modelCheckout.expiration = "2022-05-29";
    this.modelCheckout.currency = '484';
    this.modelCheckout.amount = 1.1;

    this.paymentService.postCheckoutGenrate(this.access_token, this.modelCheckout).subscribe( (data)=>{
      console.log('COMPLETE =>',data); 

      this.urlPayOrder = data['dataResponse'].payOrder;
      this.loading = false;

      location.replace(`https://sandbox-ecommerce.blumonpay.net${this.urlPayOrder}`);
      
    }, (error)=>{

      this.loading = false;
      console.error(error);
    });
  }

}
