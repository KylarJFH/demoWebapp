import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
      <div class="container content has-text-centered">
      <p>{{ 'madeBy' | translate: { author: author } }}</p>
      </div>
    </footer>
  `,
  styles: ``
})
export class FooterComponent {
  author = 'Jan Felix Hofmann';
}
