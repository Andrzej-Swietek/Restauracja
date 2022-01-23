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
import {itemFilterPipe} from "./shared/pipes/itemFilter.pipe";
import { CartComponent } from './views/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import {CartState} from "./store/state/cart.state";
import { RoundBtnComponent } from './components/round-btn/round-btn.component';
import { SuccessDirective } from './shared/directives/success.directive';
import { PasswordLengthDetectorDirective } from './shared/directives/password-lenght-detector.directive';
import { HelloComponent } from './views/hello/hello.component';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import {AuthService} from "./services/auth.service";
import {ProductServiceService} from "./services/product-service.service";
import {UserState} from "./store/state/user.state";
import { RoleDirective } from './shared/directives/role.directive';
import { LoginAlertComponent } from './components/login-alert/login-alert.component';
import { FailureDirective } from './shared/directives/failure.directive';



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
    itemFilterPipe,
    CartComponent,
    CartItemComponent,
    RoundBtnComponent,
    SuccessDirective,
    PasswordLengthDetectorDirective,
    HelloComponent,
    RegisterComponent,
    LoginComponent,
    RoleDirective,
    LoginAlertComponent,
    FailureDirective,
  ],
  imports: [
    NgxsModule.forRoot([ProductState, CartState, UserState], {}),
    NgxsLoggerPluginModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgxPaginationModule
  ],
  providers: [ProductServiceService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
