import { ProductModel } from "./product.model";

export interface CartModel {
  item: ProductModel,
  quantity: number
}
