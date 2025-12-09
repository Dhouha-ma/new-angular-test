import { Component } from '@angular/core';

import { PaymentForm } from '../payment-form/payment-form';

@Component({
  selector: 'app-home',
  imports: [PaymentForm],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
