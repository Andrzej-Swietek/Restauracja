import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ProductModel} from "../store/models/product.model";
import {UserModel} from "../store/models/user.model";
import {Observable} from "rxjs";
import {Select, Selector, Store} from "@ngxs/store";
import {UserState} from "../store/state/user.state";
import {HistoryCartItem, UserRole} from "../shared/types";


export type GetAllUsersResponse = { message: string, data: UserModel[] };


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url: string = environment.apis.base;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  @Select(UserState.getUser) user$: Observable<UserModel>;
  constructor(private http: HttpClient, private store: Store) { }

  getAllUsers(): Observable<GetAllUsersResponse>{
    return this.http.get<GetAllUsersResponse>(this.url + "/users", this.httpOptions);
  }
  addToCartHistory(payload: HistoryCartItem){
    let user: UserModel;
    this.user$.subscribe((data:UserModel)=>{
      user = data;
    })
    return this.http.put(this.url + "/user/addToCartHistory", {email: user.email, cart: [...user.cart,payload]})
  }


  banUser(user: UserModel){
    return this.http.put(this.url + "/user/ban", {email: user.email, value: !user.banned})
  }
  changeRole(obj:{email:string, roles:UserRole[]}){
    return this.http.put(this.url + "/user/changeRole", {email:obj.email, value:obj.roles})
  }
  deleteUser(id:number){ }
}
