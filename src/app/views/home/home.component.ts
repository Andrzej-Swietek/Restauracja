import { Component, OnInit } from '@angular/core';
import { Store, Select } from "@ngxs/store";
import {ProductState} from "../../store/state/product.state";
import {Observable} from "rxjs";
import {ProductModel} from "../../store/models/product.model";
import {CategoryType, CuisineType} from "../../shared/types";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Select(ProductState.getProducts) products$: Observable<ProductModel[]>
  constructor(private store: Store) { }
  public currentPg:number;
  filter : {
    name: string;
    category: CategoryType[];
    cuisine: CuisineType[];
    price: number;
  }

  ngOnInit(): void {
  }
  handleFilter(payload:{name:string, category: CategoryType[], cuisine: CuisineType[], price:number}):void{
    this.filter = payload;
    this.currentPg = 1;
    console.log(this.filter);
  }

}
