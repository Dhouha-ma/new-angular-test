import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
 @Input() label = "";
 
 @Output() clicked = new EventEmitter<void>();

  public handleClick() {
    this.clicked.emit();
  }
}
