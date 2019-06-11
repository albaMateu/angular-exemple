import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
//utilizará el servicio de carrito para agregar el producto actual al carrito
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(
    //Contiene información sobre la ruta, sus parámetros y datos adicionales asociados con la ruta
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product =products[+params.get('productId')];
    });
  }

  addToCart(product){
    window.alert("Producto añadido al carrito");
    this.cartService.addToCart(product);
  }

}