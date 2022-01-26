import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from "../../store/models/product.model";
import {Store} from "@ngxs/store";
import { Select } from "@ngxs/store";
import {filter, Observable} from "rxjs";
import {ProductState} from "../../store/state/product.state";
// FOR ADDING/Removing
import {AddProduct, EditProduct, RemoveProduct} from "../../store/actions/product.action";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {CategoryType, CuisineType} from "../../shared/types";
import {Router} from "@angular/router";
import {ProductServiceService} from "../../services/product-service.service";
import {AddCartItem, RemoveCartItem} from "../../store/actions/cart.action";
import {CartState, CartStateModel} from "../../store/state/cart.state";
import {CartModel} from "../../store/models/cart.model";
import {UserState} from "../../store/state/user.state";
import {UserModel} from "../../store/models/user.model";

import {fadeIn} from '../../shared/animations/fade.animation';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  animations: [fadeIn],
})

export class ItemComponent implements OnInit {

  @Input() item: ProductModel;
  @Select(CartState.getCart) cart$ : Observable<CartModel[]>
  @Select(ProductState.getProducts) products$ : Observable<ProductModel[]>
  @Select(UserState.getUser) user$: Observable<UserModel>;
  constructor(private store: Store, private router: Router, private productService: ProductServiceService) { }

  public cart : CartModel[];
  public ordered: number;
  faTrash = faTrash;

  ngOnInit(): void {
    this.user$.subscribe( data=>{
      console.log(data)
    })
  }
  plus(){

    if(this.item.quantity>0){
      this.store.dispatch(new EditProduct({
        ...this.item,
        quantity: this.item.quantity - 1
      }))
      this.item = {
        ...this.item,
        quantity: this.item.quantity - 1
      }
      this.store.dispatch(new AddCartItem({item:this.item,quantity:this.getOrdered()}))
    }

  }

  minus(){
    if(this.getOrdered()>0){
      this.store.dispatch(new EditProduct({
        ...this.item,
        quantity: this.item.quantity + 1
      }))
      this.item = {
        ...this.item,
        quantity: this.item.quantity + 1
      }
      this.store.dispatch(new RemoveCartItem({item:this.item,quantity:this.getOrdered()}))
    }

  }

  deleteHandle() {
    this.store.dispatch(new RemoveProduct(this.item));

    // do usuwania produktów z bazy
    this.productService.deleteProduct(this.item.id).subscribe( d=> console.log(d) )

  }

  getOrdered():number{
    this.store.select(state=>state.cart.cart).subscribe(data => {
      this.cart = data.filter(e=>e.item.id==this.item.id)
      this.ordered = 0;
      if(this.cart.length > 0)
        this.ordered = this.cart[0].quantity;
    })
    return this.ordered;
  }

  goTo(id: number) {
    this.router.navigate(['product', `${id}`])
  }
}
