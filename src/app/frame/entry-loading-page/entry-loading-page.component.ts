import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entry-loading-page',
  standalone: true,
  imports: [],
  templateUrl: './entry-loading-page.component.html',
  styleUrl: './entry-loading-page.component.css'
})
export class EntryLoadingPageComponent {
  constructor(private router: Router) { }

  ngOnInit(): void {
    // Redirect to the login page after 10 seconds
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000); // 10,000 ms = 10 seconds
  }

}
