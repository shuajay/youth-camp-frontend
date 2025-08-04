import { Component } from '@angular/core';
import { PrimeNG } from 'primeng/config';
import { Card } from "primeng/card";
import { PrimeModule } from '../../shared/primeModule/primeng.module';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    PrimeModule,
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
