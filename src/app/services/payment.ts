import { Injectable } from '@angular/core';

import { delay, Observable, of } from 'rxjs';
import { MockPaymentResponse, PaymentData } from '../types/user.type';

@Injectable({
  providedIn: 'root',
})
export class Payment {
  processPayment(paymentData: PaymentData): Observable<MockPaymentResponse> {
    console.log('Mock sending payment to Stripe/YITH...', paymentData);

    return of({
      status: 'success',
      transactionId: 'mock_txn_123456',
      message: 'Payment processed successfully (mock).',
    }).pipe(delay(1500));
  }
}
