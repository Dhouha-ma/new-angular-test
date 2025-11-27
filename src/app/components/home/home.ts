import { Component } from '@angular/core';
import { UserForm } from '../user-form/user-form';

@Component({
  selector: 'app-home',
  imports: [UserForm],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
