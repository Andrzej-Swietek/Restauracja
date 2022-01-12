import {Component, Input, OnInit} from '@angular/core';
import {CartModel} from "../../store/models/cart.model";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons/";
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {EditProduct} from "../../store/actions/product.action";
import {AddCartItem, RemoveCartItem} from "../../store/actions/cart.action";
import {Select, Store} from "@ngxs/store";
import {ProductServiceService} from "../../services/product-service.service";
import {CartState} from "../../store/state/cart.state";
import {Observable} from "rxjs";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  faPlus: IconDefinition = faPlus;
  faMinus: IconDefinition = faMinus;
  faTrash: IconDefinition = faTrash;
  @Input() item: CartModel;

  @Select(CartState.getCart) cart$ : Observable<CartModel[]>
  constructor(private store:Store, private productService: ProductServiceService) { }

  public cart : CartModel[];
  public ordered: number;


  ngOnInit(): void {
  }


  plus(){
    console.log(this.item.item.quantity)
    if(this.item.item.quantity>0){
      this.store.dispatch(new EditProduct({
        ...this.item.item,
        quantity: this.item.item.quantity - 1
      }))
    }
    this.store.dispatch(new AddCartItem(this.item))

  }
  minus(){
    if(this.getOrdered()>0){
      this.store.dispatch(new EditProduct({
        ...this.item.item,
        quantity: this.item.item.quantity + 1
      }))
    }
    this.store.dispatch(new RemoveCartItem(this.item))
  }

  getOrdered():number{
    this.store.select(state=>state.cart.cart).subscribe(data => {
      this.cart = data.filter(e=>e.item.id==this.item.item.id)
      this.ordered = 0;
      if(this.cart.length > 0)
        this.ordered = this.cart[0].quantity;
    })
    return this.ordered;
  }

  add(){ alert('add') }
  remove(){ alert('delete') }

}
