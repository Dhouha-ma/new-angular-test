import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Card } from '../shared/card/card';
import { Button } from '../shared/button/button';
import { User } from '../../types/user.type';

@Component({
  selector: 'app-about',
  imports: [Card, Button],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  public user: User<number> = {
    name: 'Dhouha',
    age: 33,
  };

  updateAge() {
    /**  OnPush reacts ONLY to new references */

    const newAge = this.user.age + 1;
    this.user = { ...this.user, age: newAge };
  }
}
