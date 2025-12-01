import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserForm } from './user-form';

describe('UserForm', () => {
  let component: UserForm;
  let fixture: ComponentFixture<UserForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   describe('onButtonClick: submit button behavior', () => {
    it('should log a message when clicked', () => {
      const logSpy = spyOn(console, 'log');

      component.onButtonClick();

      expect(logSpy).toHaveBeenCalledWith('Button clicked!');
    });
  });
});
