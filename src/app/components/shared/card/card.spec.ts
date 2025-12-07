import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card } from './card';
import { ButtonText } from '../../../types/user.type';

describe('Card', () => {
  let component: Card;
  let fixture: ComponentFixture<Card>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card],
    }).compileComponents();

    fixture = TestBed.createComponent(Card);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('buttonText: returns correct button text', () => {
    it('should return Collapse text if card is expended', () => {
      component.isExpanded = true;

      expect(component.buttonText()).toBe(ButtonText.Collapse);
    });

    it('should return Expend text if card is collapsed', () => {
      component.isExpanded = false;

      expect(component.buttonText()).toBe(ButtonText.Expend);
    });
  });
});
