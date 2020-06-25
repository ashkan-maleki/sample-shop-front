import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";

import {Product} from "../abstract/product";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productForm;
  products: Product[];

  async getProducts(): Promise<void> {
    this.products = await this.productService.getProducts();
  }

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {
    this.productForm = this.formBuilder.group({

    });
  }

  async onSubmit(product: Product) {
    await this.productService.deleteProduct(product.id);
  }

  async ngOnInit(): Promise<void> {
    await this.getProducts();
  }

}
