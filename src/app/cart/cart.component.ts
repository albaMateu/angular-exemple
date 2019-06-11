import { Component, OnInit } from '@angular/core';
//utilizar el servicio de carrito para mostrar los productos en el carrito.
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  //almacenar los productos en el carrito
  items;
  constructor(
    private cartService: CartService
  ) {
    this.items= cartService.getItemsCart();
   }

  ngOnInit() {
  }

}