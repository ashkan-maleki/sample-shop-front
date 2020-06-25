import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  get isAuthenticated(): boolean {
    return this.authService.isAuthenticated;
  }
  constructor(
    private authService : AuthService
  ) { }

  ngOnInit(): void {
    // this.isAuthenticated = this.authService.isAuthenticated;
  }

}
