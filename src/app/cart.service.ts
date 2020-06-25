import { Injectable } from '@angular/core';
import {Cart} from "./abstract/cart";
import {Product} from "./abstract/product";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Cart[] =[];
  private createCartItem(product: Product): void {
    let cart_item : Cart = {
      productId: product.id,
      product: product,
      count: 1,
      totalPrice: product.price
    }
    this.cart.push(cart_item)
  }

  addProduct(product: Product): void {
    if (this.cart.length == 0) {
      this.createCartItem(product);
    }
    else {
      let cartItem : Cart = this.cart.find(c => c.productId == product.id);
      if (cartItem === undefined) {
        this.createCartItem(product);
      }
      else {
        this.increaseProductCount(product);
      }
    }
    console.log(this.cart);
  }

  findProduct(product : Product) : Cart {
    return  this.cart.find(c => c.productId == product.id)
  }

  increaseProductCount(product : Product) : void {
    let cartItem : Cart = this.findProduct(product);
    cartItem.count++;
    cartItem.totalPrice = (+product.price * cartItem.count).toString();
  }

  decreaseProductCount(product : Product) : void {
    let cartItem : Cart = this.findProduct(product);
    cartItem.count--;
    if (cartItem.count > 0) {
      cartItem.totalPrice = (+product.price * cartItem.count).toString();
    }
    else {
      this.deleteProduct(product);
    }

  }

  deleteProduct(product : Product) {
    let cartItem : Cart = this.findProduct(product);
    const index = this.cart.indexOf(cartItem, 0);
    if (index > -1) {
      this.cart.splice(index, 1);
    }
  }

  constructor() { }
}
