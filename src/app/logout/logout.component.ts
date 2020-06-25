import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {Login} from "../abstract/login";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authService : AuthService
  ) { }
  async logout() {
    await this.authService.logout();
  }
  async ngOnInit(): Promise<void> {
    await this.logout();
  }

}
