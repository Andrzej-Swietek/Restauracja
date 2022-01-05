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
        name: "pizza",
        price: 90,
        quantity: 20,
        gallery: ["https://www.mojegotowanie.pl/media/cache/default_view/uploads/media/recipe/0002/11/pizza-pepperoni.jpeg","#"],
        category: ["lunch", "meat", "maincourse", "dinner"],
        cuisine: "italian",
        description: "description",
        ingredients: ["cheese", "onion", "flour", "ham"],
        grade: 4,
        numberOfGrades: 0,
        comments: ["ok"],
      },
      {
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
      {
        id:3,
        name: "ice cream",
        price: 20,
        quantity: 40,
        gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwWGyI3iEdkFtGuXixO6AlbZbGIN7NP3ngKQ&usqp=CAU","#"],
        category: ["dessert"],
        cuisine: "italian",
        description: "description",
        ingredients: ["milk", " heavy cream", "cacao", "cookies"],
        grade: 0,
        numberOfGrades: 0,
        comments: ["ok"],
      },
      {
        id:4,
        name: "pumpkin soup",
        price: 100,
        quantity: 20,
        gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCa3Vp-LQ2Gp2HaVDdKLyrakClhzg7T8ri7g&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFjxFDqnCGcou3UAJ6oQyxTJh2936IaG13oA&usqp=CAU","#"],
        category: ["soup", "maincourse", "dinner"],
        cuisine: "international",
        description: "description",
        ingredients: ["pumpkin", "cream", " sunflower seeds"],
        grade: 0,
        numberOfGrades: 0,
        comments: ["ok"],
      },
      {
        id:5,
        name: "Ratatouille",
        price: 200,
        quantity: 20,
        gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdFrYWtGb_i5R2UeyY7Obq6wM-n-Rc0ql_sw&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQBorsFiNnveSwwiRdtg67blP-WgUmE9RBwQ&usqp=CAU","#"],
        category: ["maincourse", "vegan", "dinner"],
        cuisine: "french",
        description: "description",
        ingredients: ["aubergine", "courgette", "tomato", "onion"],
        grade: 0,
        numberOfGrades: 0,
        comments: ["ok"],

      },
      {
        id:6,
        name: "pasta carbonara",
        price: 120,
        quantity: 20,
        gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9L2JRxP63ZXsd7joLgipDusNbZZwxjbytxQ&usqp=CAU","#"],
        category: ["maincourse", "meat", "dinner"],
        cuisine: "italian",
        description: "description",
        ingredients: ["pasta", "pancetta", "egg", "parmesan"],
        grade: 0,
        numberOfGrades: 0,
        comments: ["ok"],

      },
      {
        id:7,
        name: "burger",
        price: 120,
        quantity: 20,
        gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPkE0ObjKfUTDUzGooYZpVPbpYxg5LxCQhAA&usqp=CAU","#"],
        category: ["lunch", "maincourse", "meat", "dinner"],
        cuisine: "american",
        description: "description",
        ingredients: ["roll", "tomato", "lettuce", "cheese", "beef", "onion", "cucumber","fries"],
        grade: 0,
        numberOfGrades: 0,
        comments: ["ok"],

      },
      {
        id:8,
        name: "chili con carne",
        price: 120,
        quantity: 20,
        gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiEo-VeNjtC5DF9IcR9qC4aIDbBo-n-DOWWg&usqp=CAU","#"],
        category: ["maincourse", "meat", "dinner"],
        cuisine: "italian",
        description: "description",
        ingredients: ["beef", "tomato", "beans", "rice", "onion"],
        grade: 0,
        numberOfGrades: 0,
        comments: ["ok"],

      },
      {
        id:9,
        name: "lunch",
        price: 120,
        quantity: 20,
        gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFN8JyXjTdyIuJQJqe5KT1HNqWiGJD07RmcA&usqp=CAU","#"],
        category: ["breakfast", "lunch", "salads", "meat"],
        cuisine: "international",
        description: "description",
        ingredients: ["grilled bread", "salad", "egg", "bacon"],
        grade: 0,
        numberOfGrades: 0,
        comments: ["ok"],

      },
      {
        id:10,
        name: "korean chicken",
        price: 120,
        quantity: 20,
        gallery: ["https://bosskitchen.com/wp-content/uploads/2021/08/korean-fried-chicken-recipe.jpg","#"],
        category: ["maincourse", "meat", "dinner"],
        cuisine: "oriental",
        description: "description",
        ingredients: ["chicken", "chili", "rice", "sesame"],
        grade: 0,
        numberOfGrades: 0,
        comments: ["ok"],

      },
      {
        id:11,
        name: "hunter's stew",
        price: 120,
        quantity: 20,
        gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQIEvFBYSyTUsEhRCKWNZR8O-oieiyIFO09g&usqp=CAU","#"],
        category: ["maincourse", "meat", "dinner"],
        cuisine: "polish",
        description: "description",
        ingredients: ["venison", "pork", "cabbage", "mushrooms", "sausage"],
        grade: 0,
        numberOfGrades: 0,
        comments: ["ok"],

      },
      {
        id:12,
        name: "indian chicken",
        price: 120,
        quantity: 20,
        gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsb1RQ8mYflKdudPO2HR5KtKvA4d9aynaKsw&usqp=CAU","#"],
        category: ["maincourse", "meat", "dinner"],
        cuisine: "indian",
        description: "description",
        ingredients: ["chicken", "rice", "tomato", "cream"],
        grade: 0,
        numberOfGrades: 0,
        comments: ["ok"],

      },
      {
        id:13,
        name: "garlic bread",
        price: 120,
        quantity: 20,
        gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwBDaPxQEvWcH26aimk0RIANeItLH9b2awHg&usqp=CAU","#"],
        category: ["appetiser"],
        cuisine: "international",
        description: "description",
        ingredients: ["grilled white bread", "garlic", "olive oil", "dip"],
        grade: 0,
        numberOfGrades: 0,
        comments: ["ok"],

      },

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

  @Action(EditProduct)
  edit({getState, patchState}: StateContext<ProductStateModel>, { payload }: EditProduct){
    patchState({
      products: getState().products.map( (product: ProductModel)=>  product.id != payload.id? product : payload )
    })
  }


}

