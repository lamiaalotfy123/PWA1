import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';
import { Iuser } from '../../Models/iuser';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-template',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-template.component.html',
  styleUrl: './user-template.component.scss',
})
export class UserTemplateComponent {
[x: string]: any;
  user: Iuser = {} as Iuser;
  constructor(private UserService: UserService, private router:Router) {}
    addNewUser(){
      this.UserService.addUser(this.user).subscribe({
        next: (data) => {
          this.router.navigate(['/Products'])
         /*  console.log(data);
          this.user = {} as Iuser; */
        },
        error: (error) => console.error(error),
      });
    }
}
