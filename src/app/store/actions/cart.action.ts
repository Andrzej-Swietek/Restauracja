import {CartModel} from "../models/cart.model";

export class AddCartItem {
  static readonly type = "[CART] Add";
  constructor(public payload: CartModel) {}
}

export class RemoveCartItem {
  static readonly type = "[CART] Remove";
  constructor(public payload: CartModel) {

  }
}

export class EditCartItem {
  static readonly type = "[CART] Edit";
  constructor(public payload: CartModel) {}
}
