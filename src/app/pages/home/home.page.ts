import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorService } from 'src/app/Services/behavior.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  loading: boolean;
  listModel = []; 
  arrayProds = [];

  constructor(  public router: Router, 
                public productSrv: ProductsService,
                public behaviorSrv: BehaviorService ) { }

  ngOnInit() {
    this.loading = true;
    this.viewProductsList();
  }

  goToCart(){
    this.router.navigateByUrl('cart');
  }

  viewProductsList(){
    this.productSrv.getProductsList().subscribe( (resp: any) => {
      this.listModel = resp;
      this.loading = false;
    });
  }

  setProductCart(paramItem){
    this.arrayProds.push(paramItem)
    this.behaviorSrv.bindingProductsArray(this.arrayProds)
  }

}
