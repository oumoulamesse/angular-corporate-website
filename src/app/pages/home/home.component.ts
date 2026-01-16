import { Component } from '@angular/core';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { FooterComponent } from '../../common/footer/footer.component';
import { AboutComponent } from '../about/about.component';

import { HeroComponent } from '../hero/hero.component';

import { ServicesComponent } from '../services/services.component';
import { TestimonialComponent } from '../testimonial/testimonial.component';
import { ContactComponent } from '../contact/contact.component';
import { PatnersComponent } from "../patners/patners.component";

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [NavbarComponent, AboutComponent,
    HeroComponent, ServicesComponent, TestimonialComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
