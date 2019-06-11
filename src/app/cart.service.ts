import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items=[];

  constructor(
    private http: HttpClient
  ) { }

  addToCart (product){
    this.items.push(product);
  }

  getItemsCart(){
    return this.items;
  }

  clearCart (){
    this.items=[];
    return this.items;
  }
  //método para recuperar los datos de envío (tipos y precios)
  getShippingPrices(){
    return this.http.get('assets/shipping.json');
  }

}