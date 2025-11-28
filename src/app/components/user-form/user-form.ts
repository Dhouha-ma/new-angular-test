import { Component } from '@angular/core';

import { FormInput } from '../shared/form-input/form-input';
import { Button } from '../shared/button/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserFormControls } from '../../types/user.type';

@Component({
  selector: 'app-user-form',
  imports: [FormInput, Button, ReactiveFormsModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.scss',
})
export class UserForm {
  public userForm: FormGroup<UserFormControls>;

  constructor() {
    this.userForm = new FormGroup<UserFormControls>({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required]), //Validators.email
      phone: new FormControl('', Validators.required),
    });
  }

  public onButtonClick() {
    console.log('Button clicked!');
    console.log(this.userForm);
  }
}
