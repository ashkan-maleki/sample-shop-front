import { Component, OnInit } from '@angular/core';
import {Product} from "../abstract/product";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product : Product;

  async getProduct() : Promise<void> {
    const id = +this.route.snapshot.paramMap.get('id');
    this.product = await this.productService.getProduct(id);
  }

  constructor(
    private route : ActivatedRoute,
    private productService : ProductService,
    // private location : Location
  ) { }

  async ngOnInit(): Promise<void> {
    await this.getProduct();
  }

}
