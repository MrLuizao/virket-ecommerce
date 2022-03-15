import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorService {

  arraySource = new BehaviorSubject<[]>([]);
  public $getArrayList = this.arraySource.asObservable();

  constructor() { }

  bindingProductsArray( paramData:any ){
    this.arraySource.next(paramData);
  }

}
