import { Component } from '@angular/core';

@Component({
  selector: 'app-public-footer',
  imports: [],
  templateUrl: './public-footer.html',
  styleUrl: './public-footer.css',
})
export class PublicFooter {
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Esto hace que el movimiento sea suave y no un salto brusco
    });
  }
}
