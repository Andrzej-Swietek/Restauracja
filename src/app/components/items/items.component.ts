import {Component, Input, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {ProductState} from "../../store/state/product.state";
import {Observable} from "rxjs";
import {ProductModel} from "../../store/models/product.model";
import {CategoryType} from "../../shared/types";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  @Input() filter = {name:'', category:[], cuisine: [], price:150};
  @Select(ProductState.getProducts) products$: Observable<ProductModel[]>
  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  categoryFilter(filterCategory:CategoryType[], itemCategory:CategoryType[]):boolean{
    let result = false;
    filterCategory.forEach((v)=> itemCategory.includes(v) && (result=true))
    return result;
  }

}
