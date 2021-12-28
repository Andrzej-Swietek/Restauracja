import {ProductModel} from "../models/product.model";

export class AddProduct {
  static readonly type = "[PRODUCT] Add";
  constructor(public payload: ProductModel) {}
}

export class RemoveProduct {
  static readonly type = "[PRODUCT] Remove";
  constructor(public payload: ProductModel) {

  }
}

export class EditProduct {
  static readonly type = "[PRODUCT] Edit";
  constructor(public payload: ProductModel) {}
}
