import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInput } from './form-input';

describe('FormInput', () => {
  let component: FormInput;
  let fixture: ComponentFixture<FormInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormInput],
    }).compileComponents();

    fixture = TestBed.createComponent(FormInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('writeValue', () => {
    it('should set the correct value if the provided value is defined', () => {
      const value = 'test';

      component.writeValue(value);

      expect(component.value).toBe('test');
    });

    it('should set the value to empty string if the value is undefined', () => {
      const value = undefined;

      component.writeValue(value!);

      expect(component.value).toBe('');
    });
  });
});
