import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Payment } from './payment';
import { PaymentData } from '../types/user.type';

describe('Payment', () => {
  let service: Payment;
  let httpMock: HttpTestingController;

  const mockPaymentData: PaymentData[] = [
    {
      name: 'John Doe',
      cardNumber: '123456789',
      expiryDate: '12/25',
      cvv: 123,
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [Payment],
    });

    service = TestBed.inject(Payment);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getPaymentData', () => {
    it('should retrieve payment data (GET)', () => {
      service.getPaymentData().subscribe((data) => {
        expect(data).toEqual(mockPaymentData);
        expect(data.length).toBe(1);
        expect(data[0].name).toBe('John Doe');
      });

      const req = httpMock.expectOne('/api/payment');
      expect(req.request.method).toBe('GET');

      req.flush(mockPaymentData);
    });
  });
});
