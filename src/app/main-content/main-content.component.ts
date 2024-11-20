import { Component } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { HowToOrderComponent } from './how-to-order/how-to-order.component';
import { OurMenuComponent } from './our-menu/our-menu.component';
import { FindUsAtComponent } from './find-us-at/find-us-at.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    HeroSectionComponent,
    HowToOrderComponent,
    OurMenuComponent,
    FindUsAtComponent,
    GoogleMapsComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {}
