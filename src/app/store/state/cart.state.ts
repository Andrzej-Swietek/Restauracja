import { State, StateContext, Action, Selector } from "@ngxs/store";
import {CartModel} from "../models/cart.model";
import {AddCartItem, RemoveCartItem} from "../actions/cart.action";


export class CartStateModel {
  cart: CartModel[]
}

const defaultCartItem: CartModel = {
  item: {
    id:2,
    name: "croissant",
    price: 40,
    quantity: 20,
    gallery: ["https://static.fajnegotowanie.pl/media/uploads/media_image/original/przepis/1458/croissant.jpg","https://d1c8xu194km6ge.cloudfront.net/assets/372267/unit_13_footer_intro_to_croissants_IMG_0767_HD1280.jpg","https://img.delicious.com.au/RzgR3kXD/w1200/del/2015/12/cornetti-italian-croissants-24713-1.jpg"],
    category: ["dessert", "lunch"],
    cuisine: "french",
    description: "description",
    ingredients: ["chocolate", "butter", "flour"],
    grade: 4,
    numberOfGrades: 1,
    comments: ["ok"],
  },
  quantity: 1
}

@State<CartStateModel>({
  name: 'cart',
  defaults: {
    cart: [
      // defaultCartItem
    ]
  }
})
export class CartState {
  @Selector()
  static getCart(state: CartStateModel) {
    return state.cart;
  }

  @Action(AddCartItem)
  add({getState, patchState}: StateContext<CartStateModel>, { payload }: AddCartItem){
    //TODO jesli nie ma itema juz to pushuj jesli jest to tylko item.quantity zwieksz
    const state = getState();
    let exists = state.cart.some( (cartItem:CartModel)=> cartItem.item.id === payload.item.id )
    if ( exists ) {  }
      patchState({
      cart: [...state.cart, payload]
    })
  }

  @Action(RemoveCartItem)
  remove({getState, patchState}: StateContext<CartStateModel>, { payload }: RemoveCartItem){
    // TODO: ZMNIEJSZANIE ILOSCI I JESLI ZERO TO FILTER OUT
    const cartItem: CartModel = getState().cart.filter( (cartItem: CartModel) => cartItem.item.id !== payload.item.id )[0];
    if( cartItem.quantity == 1 ) {
      patchState({
        cart: getState().cart.map( (cartItem: CartModel) => {
          if ( cartItem.item.id !== payload.item.id ) return cartItem;
          else {
            return {
              item: payload.item,
              quantity: cartItem.quantity+1
            }
          }
        })
      })
    }
    else {
      patchState({
        cart: getState().cart.filter( (cartItem: CartModel) => cartItem.item.id !== payload.item.id )
      })
    }
  }
}
