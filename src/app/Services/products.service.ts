import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( public httpClient: HttpClient ) { }

  getProductsList(){
    return this.httpClient.get('https://fakestoreapi.com/products');
  }
  
}
