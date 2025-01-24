import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../home-page/header/header.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { FooterComponent } from '../home-page/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CommonModule } from '@angular/common';
import { InstallmentComponent } from '../home-page/main/installment/installment.component';
import { ErrorPageComponent } from '../home-page/main/error-page/error-page.component';
import { AboutComponent } from '../home-page/main/about/about.component';
import { PromoutionsComponent } from '../home-page/main/promoutions/promoutions.component';
import { AllComponent } from '../home-page/header/categories/all/all.component';
import { CartComponent } from '../home-page/header/cart/cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HomePageComponent,
    FooterComponent,
    DashboardComponent,
    CommonModule,
    ErrorPageComponent,
    AboutComponent,
    InstallmentComponent,
    PromoutionsComponent,
    CartComponent
  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
