import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Select, Store} from "@ngxs/store";
import {RegisterUser} from "../shared/types";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {UserState} from "../store/state/user.state";
import {UserModel} from "../store/models/user.model";
import {LogoutUser} from "../store/actions/user.action";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  @Select(UserState.getUser) user$: Observable<UserModel>;
  private url: string = environment.apis.base;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient, private store: Store) { }

  login(email: string, password: string){
    return this.http.post( this.url + "/user/login", {email, password}, this.httpOptions )
  }
  register(user: RegisterUser) {

    console.log('REGISTER')
    return this.http.post( this.url + "/user/register", user, this.httpOptions )
  }

  isAuthenticated(): boolean {
    let success : boolean = false;
    this.user$.subscribe( userData =>  {
      if(userData != null)
        success =  "token" in userData
    })
    return success
  }
  logout(){
    this.store.dispatch(new LogoutUser({}))
  }
}
