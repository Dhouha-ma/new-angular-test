import { Component } from '@angular/core';
import { Card } from '../shared/card/card';

@Component({
  selector: 'app-home',
  imports: [Card],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
