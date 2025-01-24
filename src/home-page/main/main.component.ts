import { Component } from '@angular/core';
import { InstallmentComponent } from './installment/installment.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [InstallmentComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
