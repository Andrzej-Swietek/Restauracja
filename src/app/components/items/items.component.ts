import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {ProductState} from "../../store/state/product.state";
import {Observable} from "rxjs";
import {ProductModel} from "../../store/models/product.model";
import {CategoryType, CuisineType} from "../../shared/types";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  @Input() filter:{name:string, price:number, category:CategoryType[], cuisine:CuisineType[]} = {name:'', category:[], cuisine: [], price:150};
  @Input() currentPg = 1;
  @Select(ProductState.getProducts) products$: Observable<ProductModel[]>

  constructor(private store: Store) { }

  ngOnInit(): void {
  }
  pageChanged(e):void{
    this.currentPg = 1;
  }

}
