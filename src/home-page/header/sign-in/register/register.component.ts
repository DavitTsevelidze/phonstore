import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
 
 
  constructor(private router: Router){
    
  }
logIn(){
  this.router.navigate(['signIn'])
}
regIster(){
  this.router.navigate(['register'])
}
}
