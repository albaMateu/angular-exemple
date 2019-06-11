import { Component, OnInit } from '@angular/core';

//use el servicio de carrito para recuperar datos de envío a través de HTTP desde el shipping.json
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent {
  shippingCosts;

  constructor(
    private cartService: CartService
  ) {
    this.shippingCosts = this.cartService.getShippingPrices();
  }

  ngOnInit() {
  }

}