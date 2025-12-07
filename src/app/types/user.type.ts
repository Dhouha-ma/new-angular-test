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
