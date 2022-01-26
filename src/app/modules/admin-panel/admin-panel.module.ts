import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

// COMPONENTS
import { AdminPanelComponent } from "../../views/admin-panel/admin-panel.component";
import {SharedModule} from "../../shared/shared.module";

const routes: Routes = [
  {
    path: '',
    component: AdminPanelComponent,
  }
]

@NgModule({
  declarations: [
    AdminPanelComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class AdminPanelModule { }
