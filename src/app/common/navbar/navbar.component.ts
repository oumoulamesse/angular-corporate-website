import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuOpen = false;
  pagesOpen = false;
  servicesOpen = false;

  isSticky = false;
  isLightPage = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {

        const lightPages = [
          '/about',
          '/services',
          '/contact',
          '/blog',
          '/solutions',
          '/services/web',
          '/services/coaching',
          '/services/it'
        ];

        this.isLightPage = lightPages.includes(event.urlAfterRedirects);

        // ✅ Reset menu à chaque navigation
        this.menuOpen = false;
        this.pagesOpen = false;
        this.servicesOpen = false;
      });
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;

    // ✅ Quand tu fermes le menu, on ferme aussi les sous-menus
    if (!this.menuOpen) {
      this.pagesOpen = false;
      this.servicesOpen = false;
    }
  }

  togglePages() {
    this.pagesOpen = !this.pagesOpen;

    // ✅ Optionnel : fermer Services si Pages s'ouvre
    if (this.pagesOpen) this.servicesOpen = false;
  }

  onServicesClick(event: Event) {
    event.preventDefault();

    // ✅ Toggle seulement sur mobile
    if (window.innerWidth <= 992) {
      this.servicesOpen = !this.servicesOpen;

      // ✅ Optionnel : fermer Pages si Services s'ouvre
      if (this.servicesOpen) this.pagesOpen = false;
    }
  }

  closeMenu() {
    // ✅ ferme tout, mobile ET desktop
    this.menuOpen = false;
    this.pagesOpen = false;
    this.servicesOpen = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.scrollY > 50;
  }
}
