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
  public roles = [
    { id: 1, title: 'Developer' },
    { id: 2, title: 'QA' },
  ];

  constructor() {}

  ngOnInit(): void {
    this.initiateUserForm();
    // this.http.get('/api/test').subscribe(); for testing interceptor

    this.handleRoleChange();
  }

  public isInputInvalid(inputControlName: string): boolean {
    return (
      this.userForm.get(inputControlName)!.invalid && this.userForm.get(inputControlName)!.touched
    );
  }

  public onButtonClick() {
    console.log('Button clicked!');
    console.log(this.userForm.getRawValue());
  }

  private initiateUserForm() {
    this.userForm = new FormGroup<UserFormControls>({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required),
      roleId: new FormControl(1, Validators.required),
    });
  }

  private handleRoleChange() {
    this.userForm.get('roleId')?.valueChanges.subscribe((roleId) => {
      console.log(roleId, 'role changed');
    });
  }
}
