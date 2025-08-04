import { Component } from '@angular/core';
import { PrimengModule } from '../../primeng.module';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    CommonModule,
    PrimengModule,
    RouterLink,
  ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  menuItems = [
    { label: 'Home', value: 'home' },
    { label: 'About', value: 'about' },
    { label: 'Events', value: 'events' },
    { label: 'Contact', value: 'contact' }
  ];
}
