import { Component, OnInit } from '@angular/core';
import {CartService} from "../cart.service";
import {Cart} from "../abstract/cart";
import {Product} from "../abstract/product";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart: Cart[];
  constructor(private cartService: CartService) {

  }

  decreaseProductCount(product : Product) {
    this.cartService.decreaseProductCount(product);
  }

  increaseProductCount(product : Product) {
    this.cartService.increaseProductCount(product);
  }

  deleteProduct(product : Product) {
    this.cartService.deleteProduct(product);
  }

  loadCart() {
    this.cart = this.cartService.cart;
  }

  ngOnInit(): void {
    this.loadCart();
  }

}
