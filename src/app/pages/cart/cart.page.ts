import { Component, OnInit } from '@angular/core';
import { BehaviorService } from 'src/app/Services/behavior.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cartProducts = [];

  constructor( public behaviorSrv: BehaviorService ) { }

  ngOnInit() {
    this.behaviorSrv.$getArrayList.subscribe( (items)=>{
      
      this.cartProducts = items
      console.log('this.cartProducts:', this.cartProducts);
    });
  }

  deleteProductItem(){
    this.cartProducts.pop()
    this.behaviorSrv.bindingProductsArray(this.cartProducts)
  }

}
