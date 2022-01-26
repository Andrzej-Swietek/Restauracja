import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from "./views/product/product.component";
import {NotFoundComponent} from "./views/not-found/not-found.component";
import {CartComponent} from "./views/cart/cart.component";
import {HelloComponent} from "./views/hello/hello.component";
import {RegisterComponent} from "./views/register/register.component";
import {LoginComponent} from "./views/login/login.component";
import {UserGuardGuard} from "./shared/user-guard.guard";
import {CartHistoryComponent} from "./views/cart-history/cart-history.component";
import {SettingsComponent} from "./views/settings/settings.component";


const routes: Routes = [
  {
    path: "",
    // component: HelloComponent
    loadChildren: ()=> import('./modules/hello/hello.module').then(m=>m.HelloModule)
  },
  {
    path: "menu",
    // component: HomeComponent
    loadChildren: ()=> import('./modules/home/home.module').then(m=>m.HomeModule),
    pathMatch: 'full'
  },
  { path: "product/:id", component: ProductComponent, canActivate: [UserGuardGuard] },
  { path: "cart", component: CartComponent,canActivate: [UserGuardGuard] },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "cart-history", component: CartHistoryComponent, canActivate: [UserGuardGuard]},
  { path: "settings", component: SettingsComponent, canActivate: [UserGuardGuard]},
  {
    path: "user-management",
    // component: UsersMangementComponent,
    loadChildren: ()=> import('./modules/users-mangement/users-mangement.module').then(m=>m.UsersMangementModule),
    canActivate: [UserGuardGuard],
    pathMatch: 'full'
  },
  {
    path: "admin-panel",
    // component: AdminPanelComponent,
    loadChildren: ()=> import('./modules/admin-panel/admin-panel.module').then(m=> m.AdminPanelModule),
    canActivate: [UserGuardGuard],
  },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
