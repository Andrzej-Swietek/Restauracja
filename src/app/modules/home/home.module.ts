import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {NgxPaginationModule} from "ngx-pagination";

// COMPONENTS
import { ItemsComponent } from "../../components/items/items.component";
import { ItemComponent} from "../../components/item/item.component";
import { SearchComponent } from "../../components/search/search.component";
import { HomeComponent } from "../../views/home/home.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    ItemsComponent,
    ItemComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    NgxPaginationModule,
    FontAwesomeModule,
  ]
})
export class HomeModule { }
