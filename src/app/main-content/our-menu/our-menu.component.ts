import { Component } from '@angular/core';
import { MENU_LIST } from '../../data/menu.list';

@Component({
  selector: 'app-our-menu',
  standalone: true,
  imports: [],
  templateUrl: './our-menu.component.html',
  styleUrl: './our-menu.component.scss',
})
export class OurMenuComponent {
  menuList = MENU_LIST;
}
