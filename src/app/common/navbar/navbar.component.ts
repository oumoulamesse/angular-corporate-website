import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

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

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  togglePages() {
    this.pagesOpen = !this.pagesOpen;
  }

  closeMenu() {
    this.menuOpen = false;
    this.pagesOpen = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isSticky = window.scrollY > 50;
  }
}
