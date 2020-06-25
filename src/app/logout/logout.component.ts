import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {Login} from "../abstract/login";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authService : AuthService,
    private router : Router
  ) { }
  async logout() {
    await this.authService.logout();
    await this.router.navigate(['/login']);
  }
  async ngOnInit(): Promise<void> {
    await this.logout();
  }

}
