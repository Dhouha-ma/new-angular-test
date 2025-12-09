import { Injectable } from '@angular/core';

import { delay, Observable, of } from 'rxjs';
import { MockPaymentResponse, PaymentData } from '../types/user.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Payment {
  constructor(private readonly http: HttpClient) {}

  processPayment(paymentData: PaymentData): Observable<MockPaymentResponse> {
    console.log('Pretending to send card to Stripe securely...', paymentData);

    const mockToken = 'tok_' + Math.random().toString(36).substring(2, 12);
    const response: MockPaymentResponse = {
      status: 'success',
      transactionId: 'txn_' + Math.floor(Math.random() * 1_000_000),
      tokenUsed: mockToken,
      message: 'Payment processed successfully',
    };

    // return this.http.post<MockPaymentResponse>('/api/payments', {
    //   ...paymentData,
    //   token: mockToken,
    // });

    return of(response).pipe(delay(1000));
  }
}
