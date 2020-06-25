import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import { Router } from '@angular/router';


import {AuthService} from "../auth.service";
import {Login} from "../abstract/login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm;
  constructor(
    private formBuilder : FormBuilder,
    private authService : AuthService,
    private router: Router,
  ) {
    this.loginForm = this.formBuilder.group({
      username: '',
      email: '',
      password: '',
    });
  }

  async onSubmit(inputData) {
    let login = inputData;
    login = await this.authService.login(login);
    await this.router.navigate(['/']);
    console.log(login);
  }

  ngOnInit(): void {
  }

}
