import { Component } from '@angular/core';
import { PrimengModule } from '../../shared/primeng.module';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    PrimengModule,
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
