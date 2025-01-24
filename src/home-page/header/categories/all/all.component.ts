import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DashboardComponent } from '../../../../app/dashboard/dashboard.component';
import { AccessoriesComponent } from '../accessories/accessories.component';
import { PromoutionsComponent } from '../../../main/promoutions/promoutions.component';

@Component({
  selector: 'app-all',
  standalone: true,
  imports: [RouterLink, DashboardComponent, AccessoriesComponent, PromoutionsComponent],
  templateUrl: './all.component.html',
  styleUrl: './all.component.scss'
})
export class AllComponent {

}
