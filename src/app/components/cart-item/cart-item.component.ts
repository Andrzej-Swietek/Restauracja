import {Component, Input, OnInit} from '@angular/core';
import {CartModel} from "../../store/models/cart.model";
import { faPlus, faMinus, faTrash } from "@fortawesome/free-solid-svg-icons/";
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";

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
  constructor() { }

  ngOnInit(): void {
  }

  add(){ alert('add') }
  remove(){ alert('delete') }

}
