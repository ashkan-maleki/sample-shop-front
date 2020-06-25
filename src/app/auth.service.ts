import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Registration} from "./abstract/registration";
import {Login} from "./abstract/login";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authtUrl: string = 'http://127.0.0.1:8000/rest-auth/';

  async register(registration: Registration): Promise<Registration> {
    const url = `${this.authtUrl}registration/`;
    return await this.http.post<Registration>(url, registration).toPromise();
  }

  async login(login: Login): Promise<Login> {
    const url = `${this.authtUrl}login/`;
    return await this.http.post<Login>(url, login).toPromise();
  }

  async logout(): Promise<Login> {
    const url = `${this.authtUrl}logout/`;
    return await this.http.post<Login>(url, null).toPromise();
  }
  constructor(private http: HttpClient) {
  }
}
