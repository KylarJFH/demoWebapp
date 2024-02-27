import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  template: `
    <app-header/>
    <div>
      <h1>{{ 'welcomeMessage' | translate: {title: 'Demo Web App', username: username} }}</h1>
      <p>{{ 'numberOfNewMessages' | translate: {count: newMessages} }}</p>
    </div>

    

    <div>
      <br/>
      <h2>ngx-translate-messageformat-compiler demo</h2>
      <li>{{'icu.select' | translate:{ 'gender': 'female', 'product': 'BabelEdit' } }}</li>
    </div>
    
    <router-outlet />
  `,
  styles: []
})

export class AppComponent {
  username = 'Kylar';
  newMessages: number;

  constructor(private translate: TranslateService) {
    this.newMessages = this.getRandomInt(0, 5);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

// export class AppComponent {
//   username = 'Kylar';
//   newMessages = 1;

//   constructor(private translate: TranslateService) {
//     translate.setDefaultLang('en');
//     translate.use('en');
//   }
// }
