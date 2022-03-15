import { Component, OnInit } from '@angular/core';
import { BehaviorService } from 'src/app/Services/behavior.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cartProducts = [];
  arrayPrices = [];
  totalPrice: number;

  constructor( public behaviorSrv: BehaviorService ) { }

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

}
