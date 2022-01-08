import { State, StateContext, Action, Selector } from "@ngxs/store";
import { ProductModel } from "../models/product.model";

import { AddProduct, EditProduct, RemoveProduct } from "../actions/product.action";
import {Observable} from "rxjs";


export class ProductStateModel {
  products: ProductModel[];
}

@State<ProductStateModel>({
  name: 'products',
  defaults: {
    products: []
  }
})
export class ProductState {
  @Selector()
  static getProducts(state: ProductStateModel) {
    return state.products;
  }
  // ACTIONS - HERE WE CAN MAKE ACTION TO DISPATCH ON INIT TO GET STUFF FROM API
  @Action(AddProduct)
  add({getState, patchState}: StateContext<ProductStateModel>, { payload }: AddProduct){
    const state = getState();
    patchState({
      products: [...state.products, payload]
    })
  }
  @Action(RemoveProduct)
  remove({getState, patchState}: StateContext<ProductStateModel>, { payload }: RemoveProduct){
    patchState({
      products: getState().products.filter( (product: ProductModel) => product.id !== payload.id )
    })
  }

  @Action(EditProduct)
  edit({getState, patchState}: StateContext<ProductStateModel>, { payload }: EditProduct){
    patchState({
      products: getState().products.map( (product: ProductModel)=>  product.id != payload.id? product : payload )
    })
  }


}

