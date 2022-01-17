import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(24),
      ]],
      lastname: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(24),
      ]],
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

  register():void {
    if (this.registerForm.valid) {
      this.authService.register({
        name: this.name.value,
        lastname: this.lastname.value,
        email: this.email.value,
        password: this.pass.value,
      })
    }
  }

  login(){
    this.router.navigate(['/login']);
  }

  get name() {
    return this.registerForm.get('name');
  }

  get email() {
    return this.registerForm.get('email');
  }
  get pass() {
    return this.registerForm.get('password');
  }
  get lastname() {
    return this.registerForm.get('lastname');
  }
}
