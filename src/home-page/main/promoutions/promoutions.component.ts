import { Component } from '@angular/core';
import { PromSalesComponent } from './prom-sales/prom-sales.component';

@Component({
  selector: 'app-promoutions',
  standalone: true,
  imports: [PromSalesComponent],
  templateUrl: './promoutions.component.html',
  styleUrl: './promoutions.component.scss'
})
export class PromoutionsComponent {

}
