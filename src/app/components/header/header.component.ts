import { UserAuth2Service } from './../../services/user-auth2.service';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  user: boolean = true;
  constructor(private UserAuth2Service: UserAuth2Service) {}
  ngOnInit(): void {
    this.UserAuth2Service.getUserStatus().subscribe({
      next: (status) => {
        this.user = status;
        console.log('User status:', this.user);
      },
      error: (error) => {
        console.log('error', error);
      },
    });
  }
  logout(): void {
    this.UserAuth2Service.logout();
    this.user = false;
  }
}
