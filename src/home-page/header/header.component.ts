import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomePageComponent } from '../home-page.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgIf, HomePageComponent ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

 }

