import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Product} from "./abstract/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productUrl: string = 'http://127.0.0.1:8000/api/products/';
  products: Product[];

  async deleteProduct (id: number): Promise<void> {
    const url = `${this.productUrl}/${id}`; // DELETE api/heroes/42
    await this.http.delete(url).toPromise();
  }

  async getProducts(): Promise<Product[]> {
    return await this.http.get<Product[]>(this.productUrl).toPromise();
  }

  async getProduct(id: number): Promise<Product> {
    const url = `${this.productUrl}${id}/`;
    return await this.http.get<Product>(url).toPromise();
  }

  async updateProduct(product: Product): Promise<Product> {
    const url = `${this.productUrl}${product.id}/`;
    return await this.http.put<Product>(url, product).toPromise();
  }

  async addProduct(product: Product): Promise<Product> {
    return await this.http.post<Product>(this.productUrl, product).toPromise();
  }

  // addHero (hero: Hero): Observable<Hero> {
  //   return this.http.post<Hero>(this.heroesUrl, hero, httpOptions)
  //     .pipe(
  //       catchError(this.handleError('addHero', hero))
  //     );
  // }

  constructor(private http: HttpClient) {
  }
}
