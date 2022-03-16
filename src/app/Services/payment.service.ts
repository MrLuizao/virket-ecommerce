import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor( public httpClient: HttpClient ) { }

  postTokenEcomerce(){

    const headers = {
      headers: new HttpHeaders({
        "Authorization": 'Basic Ymx1bW9uX3BheV9lY29tbWVyY2VfYXBpOmJsdW1vbl9wYXlfZWNvbW1lcmNlX2FwaV9wYXNzd29yZA==',
        "Content-Type": 'application/x-www-form-urlencoded'
      })
    }
    
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.set('grant_type', 'password');
    urlSearchParams.set('username', 'micasonweb1@gmail.com');
    urlSearchParams.set('password', '362565512bd98fc8f41020f12815716d6f35d3a1c17853e92a3b0a88fc6c4bd6');

    let body = urlSearchParams.toString();

    return this.httpClient.post('https://sandbox-tokener.blumonpay.net/oauth/token', body, headers);

  }

  postCheckoutGenrate( token: string, objectParam: any){

    const headers = {
      headers: new HttpHeaders({
        "Authorization":  `Bearer ${token}`,
        "Content-Type": 'application/json'
      })
    } 

    const DATA = objectParam;
   
    return this.httpClient.post('https://sandbox-ecommerce.blumonpay.net/checkout/generate', DATA, headers);
  }

}
