import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./views/home/home.component";
import {ProductComponent} from "./views/product/product.component";
import {NotFoundComponent} from "./views/not-found/not-found.component";
import {CartComponent} from "./views/cart/cart.component";
import {HelloComponent} from "./views/hello/hello.component";
import {RegisterComponent} from "./views/register/register.component";
import {LoginComponent} from "./views/login/login.component";

const routes: Routes = [
  { path: "", component: HelloComponent },
  { path: "menu", component: HomeComponent },
  { path: "product/:id", component: ProductComponent },
  { path: "cart", component: CartComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "**", component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
