import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { FormInput } from '../shared/form-input/form-input';
import { Button } from '../shared/button/button';
import { MockPaymentResponse, PaymentFormControls } from '../../types/user.type';
import { Payment } from '../../services/payment';

@Component({
  selector: 'app-payment-form',
  imports: [FormInput, Button, ReactiveFormsModule],
  templateUrl: './payment-form.html',
  styleUrl: './payment-form.scss',
})
export class PaymentForm implements OnInit {
  public paymentForm!: FormGroup<PaymentFormControls>;
  private paymentResponse!: MockPaymentResponse;

  constructor(readonly paymentService: Payment) {}

  ngOnInit(): void {
    this.initiatePaymentForm();
    console.log('expiry date', this.paymentForm.get('expiryDate')?.value);

    // this.paymentForm.patchValue({
    //   name: 'Dhouha',
    // });

    console.log('name', this.paymentForm.get('name')?.value);
  }

  public onPayNow() {
    if (this.paymentForm.invalid) {
      return;
    }

    this.paymentService.processPayment(this.paymentForm.getRawValue()).subscribe({
      next: (paymentResponse: MockPaymentResponse) => {
        this.paymentResponse = paymentResponse;
        console.log('paymentResponse', this.paymentResponse);
      },
      error: () => {
        console.log('error');
      },
    });
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
