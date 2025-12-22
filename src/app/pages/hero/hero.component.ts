import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    setTimeout(() => {
      new Swiper('.swiper', {
        modules: [Navigation, Autoplay, EffectFade],
        slidesPerView: 1,
        loop: true,
        effect: 'fade',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        }
      });
    }, 0);
  }
}
