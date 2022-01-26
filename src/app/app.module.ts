import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// Libs
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';

// Store
import { NgxsModule } from '@ngxs/store';
import { ProductState } from "./store/state/product.state";
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";
import { NgxsLoggerPlugin } from "@ngxs/logger-plugin";
import {UserState} from "./store/state/user.state";
import {CartState} from "./store/state/cart.state";


// SERVICES
import { UsersService } from "./services/users.service";
import { AuthService } from "./services/auth.service";
import { ProductServiceService } from "./services/product-service.service";

// COMPONENTS
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductComponent } from './views/product/product.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { RegisterComponent } from './views/register/register.component';
import { LoginComponent } from './views/login/login.component';
import { CartHistoryComponent } from './views/cart-history/cart-history.component';
import { SettingsComponent } from './views/settings/settings.component';
import { LoginAlertComponent } from './components/login-alert/login-alert.component';
import { CartComponent } from './views/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';


// MODULES
import { SharedModule } from "./shared/shared.module";
import {AdminPanelModule} from "./modules/admin-panel/admin-panel.module";
import {HomeModule} from "./modules/home/home.module";
import {HelloModule} from "./modules/hello/hello.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProductComponent,
    NotFoundComponent,
    CartComponent,
    CartItemComponent,
    RegisterComponent,
    LoginComponent,
    LoginAlertComponent,
    CartHistoryComponent,
    SettingsComponent,
  ],
  imports: [
    NgxsModule.forRoot([ProductState, CartState, UserState], {}),
    NgxsLoggerPluginModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HelloModule,
    AdminPanelModule,
    HomeModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgxPaginationModule
  ],
  providers: [ProductServiceService, AuthService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
