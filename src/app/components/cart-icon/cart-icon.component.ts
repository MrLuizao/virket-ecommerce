import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { BehaviorService } from 'src/app/Services/behavior.service';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.scss'],
})
export class CartIconComponent implements OnInit {

  reduxItems$: Observable<any>
  cartProducts = [];

  constructor(  public behaviorSrv: BehaviorService,
                private store: Store<any> ) { }

  ngOnInit() {

    this.reduxItems$ = this.store.select(store => store.cart);
    this.reduxItems$.subscribe( (data)=>{
      this.cartProducts = data;
    });

  }

}
