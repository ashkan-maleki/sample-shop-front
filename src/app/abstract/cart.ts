import {Product} from "./product";

export interface Cart {
  productId: number,
  product: Product,
  count: number,
  totalPrice: string
}
