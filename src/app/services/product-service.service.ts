import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {environment} from "../../environments/environment";
import {ProductModel} from "../store/models/product.model";
import {Store} from "@ngxs/store";
import {AddProduct} from "../store/actions/product.action";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private url: string = environment.apis.base;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient, private store: Store) { }

  getProducts() {
    this.http.get<ProductModel[]>(this.url, this.httpOptions)
      .subscribe( products => {
        products.forEach( (product:ProductModel) => {
          this.store.dispatch(new AddProduct(product))
        })
      })
  }
  editProduct(object:ProductModel){
    return this.http.put<ProductModel>(this.url + "/product/edit", object, this.httpOptions)
  }
  deleteProduct(id:number){
    const delUrl = `${this.url}/delete/${id}`;
    return this.http.delete(delUrl, this.httpOptions)
  }
}
