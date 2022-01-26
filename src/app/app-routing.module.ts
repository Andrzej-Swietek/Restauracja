import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./views/home/home.component";
import {ProductComponent} from "./views/product/product.component";
import {NotFoundComponent} from "./views/not-found/not-found.component";
import {CartComponent} from "./views/cart/cart.component";
import {HelloComponent} from "./views/hello/hello.component";
import {RegisterComponent} from "./views/register/register.component";
import {LoginComponent} from "./views/login/login.component";
import {UserGuardGuard} from "./shared/user-guard.guard";
import {UsersMangementComponent} from "./views/users-mangement/users-mangement.component";
import {CartHistoryComponent} from "./views/cart-history/cart-history.component";
import {SettingsComponent} from "./views/settings/settings.component";
import {AdminPanelComponent} from "./views/admin-panel/admin-panel.component";

const routes: Routes = [
  { path: "", component: HelloComponent },
  { path: "menu", component: HomeComponent },
  { path: "product/:id", component: ProductComponent },
  { path: "cart", component: CartComponent,canActivate: [UserGuardGuard] },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "user-management", component: UsersMangementComponent, canActivate: [UserGuardGuard] },
  { path: "cart-history", component: CartHistoryComponent, canActivate: [UserGuardGuard]},
  {path: "settings", component: SettingsComponent, canActivate: [UserGuardGuard]},
  {path: "admin-panel", component: AdminPanelComponent, canActivate: [UserGuardGuard]},
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
