import { Component, OnInit } from '@angular/core';
import {Product} from "../abstract/product";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  async getProducts(): Promise<void> {
    this.products = await this.productService.getProducts();
  }

  constructor(private productService: ProductService) {
  }

  async ngOnInit(): Promise<void> {
    await this.getProducts();
  }

}
