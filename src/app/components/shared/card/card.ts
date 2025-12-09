import { Component, Input, OnInit } from '@angular/core';

import { ButtonText } from '../../../types/user.type';
import { CapitalizePipe } from '../../../pipes/capitalize-pipe';
import { Button } from '../button/button';

@Component({
  selector: 'app-card',
  imports: [CapitalizePipe, Button],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card implements OnInit {
  @Input() title: string = '';

  public isExpanded = false;

  ngOnInit(): void {}

  public toggle() {
    this.isExpanded = !this.isExpanded;
  }

  public buttonText(): string {
    return this.isExpanded ? ButtonText.Collapse : ButtonText.Expend;
  }
}
