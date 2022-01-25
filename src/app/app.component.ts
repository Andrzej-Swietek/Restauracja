import {Component, OnInit} from '@angular/core';
import {ProductServiceService} from "./services/product-service.service";
import {LoginUser} from "./store/actions/user.action";
import {Store} from "@ngxs/store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'restauracja';

  constructor(private productService: ProductServiceService, private store: Store) {}
  ngOnInit(): void {
    this.productService.getProducts();
    const userSession: string | null =  sessionStorage.getItem("pending-session")

    if ( localStorage.getItem("session-persistence") === null ) localStorage.setItem("session-persistance", 'true');
    const shouldPersist = localStorage.getItem("session-persistence") === 'true'
    if ( userSession !== null && shouldPersist){
      const user = JSON.parse(userSession);
      this.store.dispatch(new LoginUser({
        email: user.email,
        lastname: user.lastname,
        name: user.name,
        password: user.password,
        role: user.role,
        token: user.token,
        banned: user.banned,
        cart: user.cart || []
      }));
    }
  }

}
