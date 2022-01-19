import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { Store } from '@ngxs/store';
import {AuthService} from "../../services/auth.service";
import {UserState} from "../../store/state/user.state";
import {LoginUser} from "../../store/actions/user.action";
import {HistoryCartItem, UserRole} from "../../shared/types";
import {UserModel} from "../../store/models/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private router: Router, private authService:AuthService, private store: Store) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(24),
        Validators.pattern('[a-z0-9_.]*@[a-z0-9_.]*\\.[a-z]{2,3}')
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(24),
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
      ]],
    });
  }

  login(){
    if (this.loginForm.valid){
      this.authService.login(this.loginForm.get("email").value, this.loginForm.get("password").value).subscribe((data:UserModel)=>{
        console.log(data);
        if(data != null){
          if('token' in data) {
            this.store.dispatch(new LoginUser({
              email: data.email,
              lastname: data.lastname,
              name: data.name,
              password: data.password,
              role: data.role,
              token: data.token,
              cart: data.cart || []
            }))
        }
        }
      })
    }


  }
  register(){
    this.router.navigate(["/register"])
  }

}
