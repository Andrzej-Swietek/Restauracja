import { Component, OnInit } from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {ProductState} from "../../store/state/product.state";
import {UserState} from "../../store/state/user.state";
import {Observable} from "rxjs";
import {ProductModel} from "../../store/models/product.model";
import {UserModel} from "../../store/models/user.model";



@Component({
  selector: 'app-cart-history',
  templateUrl: './cart-history.component.html',
  styleUrls: ['./cart-history.component.css']
})
export class CartHistoryComponent implements OnInit {


  @Select(ProductState.getProducts) products$: Observable<ProductModel[]>
  @Select(UserState.getUser) user$: Observable<UserModel>
  public history = [];
  constructor(private store: Store) { }

  ngOnInit(): void {

    this.products$.subscribe( (productsList)=>{
      this.user$.subscribe( (user:UserModel)=> {
        user.cart.forEach( (historyCartItem)=> {
          this.history.push({
            date: historyCartItem.date,
            products: historyCartItem.products.map( (item)=> productsList.filter( i => i.id === item)[0] )
          })
        })
        console.log(user)
      })
    })


  }

}
