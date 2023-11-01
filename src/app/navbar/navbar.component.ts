// navbar.component.ts
import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  currentRoute: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Introduce a small delay using setTimeout
        setTimeout(() => {
          this.currentRoute = this.route.snapshot.firstChild?.routeConfig?.path || '';
        });
      }
    });
  }
}
