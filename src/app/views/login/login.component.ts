import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder, private router: Router, private authService:AuthService) { }

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
      this.authService.login(this.loginForm.get("email").value, this.loginForm.get("password").value).subscribe(data=>{
        console.log(data);
        // if(data.token){}
      })
    }


  }
  register(){
    this.router.navigate(["/register"])
  }

}
