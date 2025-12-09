import { FormControl } from '@angular/forms';

export type UserFormControls = {
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
  email: FormControl<string | null>;
  phone: FormControl<string | null>;
};

export enum ButtonText {
  Expend = 'Expend',
  Collapse = 'Collapse',
}

export type PaymentFormControls = {
  name: FormControl<string | null>;
  cardNumber: FormControl<string | null>;
  // expiryDate: FormControl<Date | null>;
  expiryDate: FormControl<string | null>;
  cvv: FormControl<number | null>;
};

export type PaymentData = {
  name: string | null;
  cardNumber: string | null;
  expiryDate: string | null;
  cvv: number | null;
};

export type MockPaymentResponse = {
  status: 'success' | 'failed';
  transactionId: string;
  tokenUsed: string;
  message: string;
};
