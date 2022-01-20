import { Component, OnInit } from '@angular/core';
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons/faShoppingCart";
import {faUserCircle, faCog, faBrain} from "@fortawesome/free-solid-svg-icons/";
import {Select} from "@ngxs/store";
import {UserState} from "../../store/state/user.state";
import {Observable} from "rxjs";
import {UserModel} from "../../store/models/user.model";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Select(UserState.getUser) user$: Observable<UserModel>;
  constructor() { }

  faCart = faShoppingCart;
  faUser = faUserCircle;
  faSettings = faCog;
  faBrain = faBrain

  showInfo: boolean = false;

  ngOnInit(): void {
    this.user$.subscribe( data=>{
      console.log(data)
    })
  }

  get userName(){
    return this.user$.subscribe(res=> res.name )
  }

  toggleShowInfo():void { this.showInfo = !this.showInfo; }

}
