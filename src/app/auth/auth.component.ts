import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({ selector: 'app-auth', templateUrl: './auth.component.html', styleUrls: ['./auth.component.scss'] })
export class AuthComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  login() {
    this.authService.login();
  }
  logout() {
    this.authService.logout();
  }
}
