import { Component, OnInit } from '@angular/core';
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons/faShoppingCart";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons/";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  faCart = faShoppingCart;
  faUser = faUserCircle;

  ngOnInit(): void {
  }

}
