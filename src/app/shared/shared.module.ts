import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

// PIPE
import { itemFilterPipe } from "./pipes/itemFilter.pipe";

// DIRECTIVES
import { FailureDirective } from "./directives/failure.directive";
import { SuccessDirective } from "./directives/success.directive";
import { PasswordLengthDetectorDirective } from "./directives/password-lenght-detector.directive";
import { RoleDirective } from "./directives/role.directive";

import {RoundBtnComponent} from "../components/round-btn/round-btn.component";

@NgModule({
  declarations: [
    itemFilterPipe,
    FailureDirective,
    SuccessDirective,
    PasswordLengthDetectorDirective,
    RoleDirective,
    RoundBtnComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    itemFilterPipe,
    FailureDirective,
    SuccessDirective,
    PasswordLengthDetectorDirective,
    RoleDirective,
    RoundBtnComponent,
  ]
})
export class SharedModule { }
