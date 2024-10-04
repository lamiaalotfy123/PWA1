import { UserAuth2Service } from './../../services/user-auth2.service';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Iuser } from '../../Models/iuser';

@Component({
  selector: 'app-raective-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './raective-form.component.html',
  styleUrl: './raective-form.component.scss',
})
export class RaectiveFormComponent {
  userform: FormGroup;
  user: Iuser = {} as Iuser;
  constructor(
    private fb: FormBuilder,
    private UserAuth2Service: UserAuth2Service,
    private router: Router
  ) {
    this.userform = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
          Validators.maxLength(50),
        ],
      ],
      number: this.fb.array([]),
    });
  }
  get firstName() {
    return this.userform.get('firstName');
  }
  get number(): FormArray {
    return this.userform.get('number') as FormArray;
  }
  newNumber() {
    return this.fb.group({
      number1: ['', Validators.required],
      number2: ['', Validators.required],
    });
  }
  addNumber() {
    this.number.push(this.newNumber());
  }
  removeNumber(i: number) {
    this.number.removeAt(i);
  }
  addNewUser() {
    this.user = this.userform.value;
    this.UserAuth2Service.addUser(this.user).subscribe({
      next: (data) => {
        this.router.navigate(['/Products']);
      },
      error: (error) => console.error(error),
    });
  }
}

/*    this.userform=new FormGroup({
 firstName:new FormControl('',[
   Validators.required,
   Validators.minLength(3)
 ]),
 lastName:new FormControl('',[
   Validators.required,
   Validators.minLength(3)
 ]),
 email:new FormControl('',[
   Validators.required,
   Validators.email,
    Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$'),
    Validators.maxLength(50)

 ])
    }) */
