import { Component, OnInit } from '@angular/core';
import { Store, Select } from "@ngxs/store";
import {ProductState} from "../../store/state/product.state";
import {Observable} from "rxjs";
import {ProductModel} from "../../store/models/product.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Select(ProductState.getProducts) products$: Observable<ProductModel[]>
  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
