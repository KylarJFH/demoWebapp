import { Component } from '@angular/core';

@Component({
  selector: 'app-user-data',
  template: `
    <div id="div-no-indent">
      <label for="username">{{ 'user-data.username' | translate }}:</label>
      <input type="text" id="box" [(ngModel)]="username">
      <label for="surname">{{ 'user-data.surname' | translate }}:</label>
      <input type="text" id="box" [(ngModel)]="surname">
    </div>
  `,

  styles: ``
})

export class UserDataComponent {
  username: any;
  surname: any;
}
