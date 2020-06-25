import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Registration} from "./abstract/registration";
import {Login} from "./abstract/login";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authtUrl: string = 'http://127.0.0.1:8000/rest-auth/';

  tokenKey : string;
  isAuthenticated : boolean = false;

  authenticate(tokenKey: string) : void {
    this.tokenKey = tokenKey;
    this.isAuthenticated = true
    console.log(this.tokenKey);
    console.log(this.isAuthenticated);
  }

  async register(registration: Registration) {
    const url = `${this.authtUrl}registration/`;
    let tokenKey = await this.http.post(url, registration).toPromise();
    if ('key' in tokenKey) {
      this.authenticate(tokenKey['key']);
    }
    return tokenKey;
  }

  async login(login: Login) {
    const url = `${this.authtUrl}login/`;
    let tokenKey =  await this.http.post(url, login).toPromise();
    if ('key' in tokenKey) {
      this.authenticate(tokenKey['key']);
    }
    return tokenKey;
  }

  async logout(): Promise<Login> {
    const url = `${this.authtUrl}logout/`;
    this.tokenKey = null;
    this.isAuthenticated = false;
    return await this.http.post<Login>(url, null).toPromise();
  }
  constructor(private http: HttpClient) {
  }
}
