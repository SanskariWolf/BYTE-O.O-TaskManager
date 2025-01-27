import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  // constructor(private router: Router) { }
  
  // ngOnInit(): void {
  //   // Redirect to the login page after 10 seconds
  //   setTimeout(() => {
  //     this.router.navigate(['/**']);
  //   }, 1000); // 10,000 ms = 10 seconds
  // }
}
