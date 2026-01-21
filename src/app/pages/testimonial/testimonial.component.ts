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
      image: 'assets/images/testimonial1.jpg'
    },
    {
      quote: 'The perfect organizer and team builder',
      name: 'Randall Howard',
      role: 'UX Designer, Netflix',
      image: 'assets/images/testimonial4.jpg'
    },
    {
      quote: 'Flexible product with near endless possibilities',
      name: 'Adam Worrell',
      role: 'Data Analyst, Spotify',
      image: 'assets/images/testimonial3.jpg'
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
