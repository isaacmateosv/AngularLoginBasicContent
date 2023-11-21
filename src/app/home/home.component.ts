// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-home',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './home.component.html',
//   styleUrl: './home.component.scss'
// })
// export class HomeComponent {

// }


// home.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // Sample data for cards
  cards = [
    { imageUrl: 'path-to-image1.jpg', text: 'Card 1 Text' },
    { imageUrl: 'path-to-image2.jpg', text: 'Card 2 Text' },
    // Add more cards as needed
  ];
}
