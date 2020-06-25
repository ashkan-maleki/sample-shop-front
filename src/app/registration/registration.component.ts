import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Registration} from "../abstract/registration";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {


  registrationForm;
  constructor(
    private formBuilder : FormBuilder,
    private authService : AuthService
  ) {
    this.registrationForm = this.formBuilder.group({
      username: '',
      email: '',
      password1: '',
      password2: '',
    });
  }

  async onSubmit(inputData) {
    let registration : Registration = inputData as Registration;
    registration = await this.authService.register(registration);
  }

  ngOnInit(): void {
  }

}
