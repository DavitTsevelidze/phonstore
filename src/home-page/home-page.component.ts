import { Component } from '@angular/core';
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { SpaceComponent } from './main/space/space.component';
import { RouterOutlet } from '@angular/router';
import { PromSalesComponent } from './main/promoutions/prom-sales/prom-sales.component';


@Component({
  selector: 'home-page',
  standalone: true,
  imports: [DashboardComponent, SpaceComponent, RouterOutlet,PromSalesComponent ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
