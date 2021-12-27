import { Component, OnInit } from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {ProductState} from "../../store/state/product.state";
import {Observable} from "rxjs";
import {ProductModel} from "../../store/models/product.model";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  @Select(ProductState.getProducts) products$: Observable<ProductModel[]>
  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
