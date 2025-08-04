import { Component } from '@angular/core';
import { PrimengModule } from '../../shared/primeng.module';
import { SideMenuComponent } from '../../shared/side-menu/side-menu/side-menu.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    PrimengModule,
    SideMenuComponent,
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
