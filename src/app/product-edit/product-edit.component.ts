import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../product.service";
import {Product} from "../abstract/product";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  productForm;
  product : Product;

  async getProduct() : Promise<void> {
    const id = +this.route.snapshot.paramMap.get('id');
    this.product = await this.productService.getProduct(id);
    this.product.id = id;
  }

  constructor(
    private formBuilder : FormBuilder,
    private route : ActivatedRoute,
    private productService : ProductService,
    // private location : Location
  ) {
    this.productForm = this.formBuilder.group({
      name: '',
      price: ''
    });
  }

  async onSubmit(inputData) {
    let product : Product = {...inputData, id: this.product.id};
    product = await this.productService.updateProduct(product);
  }

  async ngOnInit(): Promise<void> {
    await this.getProduct();
    this.productForm.patchValue({
      name: this.product.name,
      price: this.product.price
    });
  }

}
