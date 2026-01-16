import { Component } from '@angular/core';

@Component({
  selector: 'app-web',
  imports: [],
  templateUrl: './web.component.html',
  styleUrl: './web.component.css'
})
export class WebComponent {
    websiteUrl = '';

  onAnalyze() {
    console.log(this.websiteUrl);
  }

}
