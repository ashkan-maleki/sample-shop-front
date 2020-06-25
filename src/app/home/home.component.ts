import { Component, OnInit } from '@angular/core';
import {Product} from "../abstract/product";
import {ProductService} from "../product.service";
import {Cart} from "../abstract/cart";
import {CartService} from "../cart.service";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

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
    private cartService: CartService,
    private authService : AuthService,
    private router : Router
  ) {
  }

  async ngOnInit(): Promise<void> {
    if (!this.authService.isAuthenticated) {
      this.router.navigate(['/login']);
    }
    await this.getProducts();
  }

}


