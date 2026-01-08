import { Component, AfterViewInit, ViewChild, ElementRef , OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements AfterViewInit , OnDestroy {

  @ViewChild('slider') slider!: ElementRef<HTMLUListElement>;

  activeIndex = 0;

  testimonials = [
    {
      quote: "This is the best no-code platform I've ever seen",
      name: 'Alyssa Morris',
      role: 'Product Manager, Intel',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956'
    },
    {
      quote: 'The perfect organizer and team builder',
      name: 'Randall Howard',
      role: 'UX Designer, Netflix',
      image: 'https://images.unsplash.com/photo-1504199367641-aba8151af406'
    },
    {
      quote: 'Flexible product with near endless possibilities',
      name: 'Adam Worrell',
      role: 'Data Analyst, Spotify',
      image: 'https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0'
    }
  ];
  autoplayInterval: any;

  ngAfterViewInit(): void {
    // slide initial
    setTimeout(() => {
      this.scrollTo(0);
    });
  }

  ngOnDestroy(): void {
  if (this.autoplayInterval) {
    clearInterval(this.autoplayInterval);
  }
}


  // 👇 C’EST ICI QUE TU METS CE CODE
  scrollTo(index: number): void {
    const sliderEl = this.slider.nativeElement;
    const slide = sliderEl.querySelector('.item') as HTMLElement;

    if (!slide) return;

    const width = slide.offsetWidth;
    sliderEl.style.transform = `translateX(${-index * width}px)`;

    this.activeIndex = index;
  }
}
