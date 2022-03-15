import { Component, OnInit } from '@angular/core';
import { BehaviorService } from 'src/app/Services/behavior.service';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.scss'],
})
export class CartIconComponent implements OnInit {

  cartProducts = [];

  constructor( public behaviorSrv: BehaviorService ) { }

  ngOnInit() {
    this.behaviorSrv.$getArrayList.subscribe( (items)=>{
      this.cartProducts = items;
    });
  }

}
