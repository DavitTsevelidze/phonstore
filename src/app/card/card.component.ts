import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Product } from '../app.interface';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [FormsModule, RouterOutlet, CommonModule,DashboardComponent, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() product!: Product
 
}
