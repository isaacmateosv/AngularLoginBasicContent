// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-card',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './card.component.html',
//   styleUrl: './card.component.scss'
// })
// export class CardComponent {

// }

// card.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() imageUrl: string;
  @Input() text: string;
}
