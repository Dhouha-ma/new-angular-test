import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Highlight } from '../../../directives/highlight';

@Component({
  selector: 'app-button',
  imports: [Highlight],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  @Input() label = '';
  @Input() disabled = false;

  @Output() clicked = new EventEmitter<void>();

  public handleClick() {
    this.clicked.emit();
  }
}
