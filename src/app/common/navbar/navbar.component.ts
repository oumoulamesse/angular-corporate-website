import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  menuOpen = false;
  pagesOpen = false;
  isSticky = false;
  isLightPage = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  togglePages() {
    this.pagesOpen = !this.pagesOpen;
  }

closeMenu() {
  if (window.innerWidth < 992) {
    this.menuOpen = false;
    this.pagesOpen = false;
  }
}

@HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.scrollY > 50;
  }


constructor(private router: Router) {}
   ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const lightPages = [
          '/about',
          '/services',
          '/contact',
          '/blog'
        ];

        this.isLightPage = lightPages.includes(event.urlAfterRedirects);

        // reset menu
        this.menuOpen = false;
        this.pagesOpen = false;
      });
  }
}
