import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Store} from "@ngxs/store";
import {RegisterUser} from "../shared/types";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = environment.apis.base;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient, private store: Store) { }

  login(email: string, password: string){
    this.http.post( this.url + "/login", {email, password}, this.httpOptions )
  }
  register(user: RegisterUser) {
    this.http.post( this.url + "/user/register", user, this.httpOptions )
  }
}
