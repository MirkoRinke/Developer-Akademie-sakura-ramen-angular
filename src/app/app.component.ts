import { Component } from '@angular/core';

import { HeroSectionComponent } from './hero-section/hero-section.component';
import { HowToOrderComponent } from './how-to-order/how-to-order.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroSectionComponent, HowToOrderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'sakura-ramen-angular';
}
