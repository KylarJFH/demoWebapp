import { Component } from '@angular/core';

@Component({
  selector: 'app-user-data',
  template: `
  <div id="align-row">
    <div id="has-no-margin-left">
      <label for="username">{{ 'user-data.username' | translate }}:</label>
      <input type="text" id="box" [(ngModel)]="username">
    </div>

    <div id="has-no-margin-left">
      <label for="surname">{{ 'user-data.surname' | translate }}:</label>
      <input type="text" id="box" [(ngModel)]="surname">
    </div>
  </div>
  `,
  styles: ``
})
export class UserDataComponent {
  username: any;
  surname: any;
}
