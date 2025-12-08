import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { FormInput } from '../shared/form-input/form-input';
import { Button } from '../shared/button/button';
import { UserFormControls } from '../../types/user.type';

@Component({
  selector: 'app-user-form',
  imports: [FormInput, Button, ReactiveFormsModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.scss',
})
export class UserForm implements OnInit {
  public userForm!: FormGroup<UserFormControls>;

  constructor() {}

  ngOnInit(): void {
    this.initiateUserForm();
  }

  public onButtonClick() {
    console.log('Button clicked!');
    console.log(this.userForm);
  }

  private initiateUserForm() {
    this.userForm = new FormGroup<UserFormControls>({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
    });
  }
}
