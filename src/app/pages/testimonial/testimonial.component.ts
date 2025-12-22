import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    setTimeout(() => {
      new Swiper('.testimonial-swiper', {
        modules: [Autoplay, Pagination],
        slidesPerView: 1,
        loop: true,
        
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      });
       
    }, 0);
  }

}
