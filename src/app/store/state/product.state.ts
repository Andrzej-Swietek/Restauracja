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
    products: [
      {
        id:1,
        name: "name 1",
        price: 100,
        quantity: 20,
        gallery: ["https://www.mojegotowanie.pl/media/cache/default_view/uploads/media/recipe/0002/11/pizza-pepperoni.jpeg","#"],
        category: "dessert",
        cuisine: "french",
        description: "description",
        ingredients: ["v", "w", "u"],
        grade: 0,
        numberOfGrades: 0,
        comments: ["ok"],
      },
      {
        id:2,
        name: "name 2",
        price: 100,
        quantity: 20,
        gallery: ["https://www.mojegotowanie.pl/media/cache/default_view/uploads/media/recipe/0002/11/pizza-pepperoni.jpeg","#"],
        category: "dessert",
        cuisine: "french",
        description: "description",
        ingredients: ["v", "w", "u"],
        grade: 0,
        numberOfGrades: 0,
        comments: ["ok"],
      },
      {
        id:3,
        name: "name 3",
        price: 100,
        quantity: 20,
        gallery: ["https://www.mojegotowanie.pl/media/cache/default_view/uploads/media/recipe/0002/11/pizza-pepperoni.jpeg","#"],
        category: "dessert",
        cuisine: "french",
        description: "description",
        ingredients: ["v", "w", "u"],
        grade: 0,
        numberOfGrades: 0,
        comments: ["ok"],
      },
      {
        id:4,
        name: "name 4",
        price: 100,
        quantity: 20,
        gallery: ["https://www.mojegotowanie.pl/media/cache/default_view/uploads/media/recipe/0002/11/pizza-pepperoni.jpeg","#"],
        category: "dessert",
        cuisine: "french",
        description: "description",
        ingredients: ["v", "w", "u"],
        grade: 0,
        numberOfGrades: 0,
        comments: ["ok"],
      }
    ]
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


}

