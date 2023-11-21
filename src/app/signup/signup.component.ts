// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-signup',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './signup.component.html',
//   styleUrl: './signup.component.scss'
// })
// export class SignupComponent {

// }


// signup.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(private authService: AuthService) {}

  signUp(username: string, password: string): void {
    this.authService.signUp(username, password);
  }
}
