import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Registration} from "../abstract/registration";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {


  registrationForm;
  constructor(
    private formBuilder : FormBuilder,
    private authService : AuthService,
    private router : Router
  ) {
    this.registrationForm = this.formBuilder.group({
      username: '',
      email: '',
      password1: '',
      password2: '',
    });
  }

  async onSubmit(inputData) {
    let registration = inputData;
    registration = await this.authService.register(registration);
    await this.router.navigate(['/']);
    console.log(registration);
  }

  ngOnInit(): void {
  }

}
