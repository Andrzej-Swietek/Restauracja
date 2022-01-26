import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {HelloComponent} from "../../views/hello/hello.component";
import {SharedModule} from "../../shared/shared.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";



const routes: Routes = [
  {
    path: '',
    component: HelloComponent
  }
]

@NgModule({
  declarations: [
    HelloComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FontAwesomeModule,
  ]
})
export class HelloModule { }
