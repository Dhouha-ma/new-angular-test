import { Component } from '@angular/core';

import { FormInput } from '../shared/form-input/form-input';
import { Button } from '../shared/button/button';

@Component({
  selector: 'app-user-form',
  imports: [FormInput, Button],
  templateUrl: './user-form.html',
  styleUrl: './user-form.scss',
})
export class UserForm {

  public onButtonClick() {
    console.log('Button clicked!');
  }
}
