import { Component, OnInit } from '@angular/core';
import {Product} from "../abstract/product";
import {ProductService} from "../product.service";
import {Cart} from "../abstract/cart";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[];

  async getProducts(): Promise<void> {
    this.products = await this.productService.getProducts();
  }

  addToCart(product: Product): void {
    this.cartService.addProduct(product);
  }

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {
  }

  async ngOnInit(): Promise<void> {
    await this.getProducts();
  }

}


