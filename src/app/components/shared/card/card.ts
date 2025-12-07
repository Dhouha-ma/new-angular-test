import { Component, Input } from '@angular/core';
import { ButtonText } from '../../../types/user.type';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input() title: string = '';

  public isExpanded = false;

  public toggle() {
    this.isExpanded = !this.isExpanded;
  }

  public buttonText(): string {
    return this.isExpanded ? ButtonText.Collapse : ButtonText.Expend;
  }
}
