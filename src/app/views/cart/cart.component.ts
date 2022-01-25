import { Component, OnInit } from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {CartState} from "../../store/state/cart.state";
import {Observable} from "rxjs";
import {CartModel} from "../../store/models/cart.model";
import {UsersService} from "../../services/users.service";
import {ProductServiceService} from "../../services/product-service.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  @Select( CartState.getCart ) cart$ : Observable<CartModel[]>
  constructor(private store: Store, private userService: UsersService, private productService:ProductServiceService) { }
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
    let productsIDs : number[] = [];
    this.cart$.subscribe( (data:CartModel[])=> {
      data.forEach((item:CartModel)=>{
        console.log({name:item.item.name,quantity:item.item.quantity})
        this.productService.editProduct({name:item.item.name,quantity:item.item.quantity}).subscribe( (d) => console.log(data))
      })
      productsIDs = data.map( (v:CartModel)=> v.item.id)
    })
    this.userService.addToCartHistory({date:Date().toString(), products:productsIDs}).subscribe((data)=>{
      console.log(data);
    })
    alert('paid');

  }
}
