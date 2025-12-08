import { Component } from '@angular/core';

import { Card } from '../shared/card/card';
import { PaymentForm } from '../payment-form/payment-form';

@Component({
  selector: 'app-home',
  imports: [Card, PaymentForm],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
