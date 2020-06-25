import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {ProductService} from "../product.service";
import {Product} from "../abstract/product";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  productForm;
  constructor(
    private formBuilder : FormBuilder,
    private productService : ProductService
  ) {
    this.productForm = this.formBuilder.group({
      name: '',
      price: ''
    });
  }

  async onSubmit(inputData) {
    let product : Product = inputData as Product;
    product = await this.productService.addProduct(product);
  }

  ngOnInit(): void {
  }

}
