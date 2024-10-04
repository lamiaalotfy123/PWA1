import { Component, OnInit } from '@angular/core';
import { UserAuth2Service } from '../../services/user-auth2.service';

@Component({
  selector: 'app-user-auth2',
  standalone: true,
  imports: [],
  templateUrl: './user-auth2.component.html',
  styleUrl: './user-auth2.component.scss',
})
export class UserAuth2Component implements OnInit {
  user: boolean = true;
  constructor(private userAuthService: UserAuth2Service) {}
  ngOnInit(): void {
    this.user = this.userAuthService.isUserLogged;
  }
  login() {
    this.userAuthService.login('lamiaa', '245');
    this.user = this.userAuthService.isUserLogged;
  }
  logout() {
    this.userAuthService.logout();
    this.user = this.userAuthService.isUserLogged;
  }

}
