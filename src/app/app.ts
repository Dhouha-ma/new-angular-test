import { Component, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { Home } from './components/home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('new-angular-test');

  constructor(private router: Router) {}

  public goTo(path: string) {
    this.router.navigateByUrl(path);
  }
}
