import { Component, OnInit } from '@angular/core';
//utilizar el servicio de carrito para mostrar los productos en el carrito.
import { CartService } from '../cart.service';

//proporciona métodos convenientes para generar controles en los formularios
//El FormBuilderService lo proporciona el ReactiveFormsModule, que debe estar definido en la AppModule
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  //almacenar los productos en el carrito
  items;
  //almacenar el modelo de formulario
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    //muestra articulos del carrito
    this.items= cartService.getItemsCart();

    //Durante el proceso de pago, la aplicación le pedirá al usuario un nombre y una dirección. Para poder recopilar esa información más adelante
    this.checkoutForm= formBuilder.group(
      {
        name:'',
        address:''
      }
    );
   }

  ngOnInit() {
  }

  onSubmit(clientData){
    // Processar les dades de pagament ací
    console.warn("S'ha enviat la vostra comanda", clientData);
 
    //buidar el carrito
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

  }

}