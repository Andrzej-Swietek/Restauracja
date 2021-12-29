import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

// Libs


// Store
import { NgxsModule } from '@ngxs/store';
import { ProductState } from "./store/state/product.state";
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";
import { NgxsLoggerPlugin } from "@ngxs/logger-plugin";
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { ProductComponent } from './views/product/product.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { SearchComponent } from './components/search/search.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemComponent } from './components/item/item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {NgxPaginationModule} from 'ngx-pagination';
import {itemFilterPipe} from "./components/items/itemFilter.pipe";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    NotFoundComponent,
    SearchComponent,
    ItemsComponent,
    ItemComponent,
    itemFilterPipe
  ],
  imports: [
    NgxsModule.forRoot([ProductState], {}),
    NgxsLoggerPluginModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
