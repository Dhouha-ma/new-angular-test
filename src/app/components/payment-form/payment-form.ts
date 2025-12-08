import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { FormInput } from '../shared/form-input/form-input';
import { Button } from '../shared/button/button';
import { PaymentFormControls } from '../../types/user.type';

@Component({
  selector: 'app-payment-form',
  imports: [FormInput, Button, ReactiveFormsModule],
  templateUrl: './payment-form.html',
  styleUrl: './payment-form.scss',
})
export class PaymentForm implements OnInit {
  paymentForm!: FormGroup<PaymentFormControls>;

  constructor() {}

  ngOnInit(): void {
    this.initiatePaymentForm();
    console.log('expiry date', this.paymentForm.get('expiryDate')?.value);

    // this.paymentForm.patchValue({
    //   name: 'Dhouha',
    // });

    console.log('name', this.paymentForm.get('name')?.value);
  }

  private initiatePaymentForm() {
    this.paymentForm = new FormGroup<PaymentFormControls>({
      name: new FormControl('', Validators.required),
      cardNumber: new FormControl('', Validators.required),
      // expiryDate: new FormControl(new Date(), [Validators.required]),
      expiryDate: new FormControl('', [Validators.required]),
      cvv: new FormControl(null, Validators.required),
    });
  }
}
