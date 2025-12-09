import { Injectable } from '@angular/core';

import { delay, Observable, of } from 'rxjs';
import { MockPaymentResponse, PaymentApiResponse, PaymentData } from '../types/user.type';
import { HttpClient, HttpParams } from '@angular/common/http';

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

  /** Examples */
  getPaymentData(): Observable<PaymentData[]> {
    return this.http.get<PaymentData[]>('/api/payment');
  }

  getPaymentDataWithParams(filter: string): Observable<PaymentData[]> {
    const params = new HttpParams().set('filter', filter);

    return this.http.get<PaymentData[]>('/api/payment', { params });
  }

  postPaymentData(payment: PaymentData): Observable<PaymentApiResponse> {
    return this.http.post<PaymentApiResponse>('/api/payment', payment);
  }

  postPaymentDataWithParams(
    payment: PaymentData,
    filter: string,
    page: string,
  ): Observable<PaymentApiResponse> {
    const params = new HttpParams().set('filter', filter).set('page', page);

    return this.http.post<PaymentApiResponse>('/api/payment', payment, { params });
  }

  updatePaymentData(id: string, payment: PaymentData): Observable<PaymentApiResponse> {
    return this.http.put<PaymentApiResponse>(`/api/users/${id}`, payment);
  }

  updatePaymentDataWithParams(
    id: string,
    payment: PaymentData,
    mode: string,
  ): Observable<PaymentApiResponse> {
    const params = new HttpParams().set('mode', mode);

    return this.http.put<PaymentApiResponse>(`/api/users/${id}`, payment, { params });
  }
}
