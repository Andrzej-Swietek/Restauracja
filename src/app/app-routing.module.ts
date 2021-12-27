import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./views/home/home.component";
import {ProductComponent} from "./views/product/product.component";
import {NotFoundComponent} from "./views/not-found/not-found.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "product/:id", component: ProductComponent },
  { path: "**", component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
