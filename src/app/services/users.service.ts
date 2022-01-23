import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ProductModel} from "../store/models/product.model";
import {UserModel} from "../store/models/user.model";
import {Observable} from "rxjs";


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
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<GetAllUsersResponse>{
    return this.http.get<GetAllUsersResponse>(this.url + "/users", this.httpOptions);
  }

  banUser(id:number){ }
  deleteUser(id:number){ }
}
