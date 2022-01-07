import { Component, OnInit } from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {CartState} from "../../store/state/cart.state";
import {Observable} from "rxjs";
import {CartModel} from "../../store/models/cart.model";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Select( CartState.getCart ) cart$ : Observable<CartModel[]>
  constructor(private store: Store) { }
  public shippingPrice :number = 14;

  ngOnInit(): void {
  }

  get totalToPay(): number {
    let toPay: number = 0;
     this.cart$.subscribe( (data:CartModel[])=> {
       toPay = data.reduce( (acc: number,v:CartModel)=>  acc + ( v.item.price * v.quantity ), 0 )
    })
    return toPay
  }

  get discount() {
    const price = this.totalToPay
    if ( price >= 10000 ) return 10;
    else if ( price >= 1000 ) return 5;
    else if ( price >= 500 ) return 3;
    return 0
  }


  pay():void {
    alert('Paid');
  }
}
