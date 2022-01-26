import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {UsersMangementComponent} from "../../views/users-mangement/users-mangement.component";
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

const routes: Routes = [
  {
    path: '',
    component: UsersMangementComponent
  }
]

@NgModule({
  declarations: [
    UsersMangementComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FontAwesomeModule,
  ]
})
export class UsersMangementModule { }
