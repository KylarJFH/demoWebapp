import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gender-select',
  template: `
  <div id="align-row">
    <div id="has-no-margin-left">
      <label for="formality">{{ 'user-data.selectFormality' | translate }}:</label>
      <select id="box" [(ngModel)]="selectedFormality" (change)="formalityChanged()">
        <option value="formal">{{'user-data.formal' | translate}}</option>
        <option value="informal">{{'user-data.informal' | translate}}</option>
      </select>
    </div>

    <div id="has-no-margin-left">
      <label for="gender">{{ 'user-data.selectGender' | translate }}:</label>
      <select id="box" [(ngModel)]="prefGender" (ngModelChange)="setPrefGender()">
        <option value=""></option>
        <option value="male">{{'user-data.gender.male' | translate}}</option>
        <option value="female">{{'user-data.gender.female' | translate}}</option>
        <option value="other">{{'user-data.gender.other' | translate}}</option>
      </select>
    </div>
  </div>

    <!-- **************Complicated dropdown************** -->
    <!-- <div id="button" (click)="isDropdownActive=true">
      <div id="components-havegap">
        <div>{{ prefGender?.name || 'user-data.selectGender' | translate }}</div>
        <button *ngIf="prefGender" (click)="clearSelection(); $event.stopImmediatePropagation()" id="button1">X</button>
      </div>

      <div id="dropdown" [ngClass]="{ active: isDropdownActive }">
        <ul>
          <li *ngFor="let option of genderList">
            <a href="#" (click)="selectGender(option); isDropdownActive=false; $event.stopImmediatePropagation()"> {{ option.name | translate }}</a>
          </li>
        </ul>
      </div>
    </div> -->
    <!-- **************Complicated dropdown************** -->

  `,
  styles: ``
})
export class GenderSelectComponent {
  prefGender: string = '';

  setPrefGender() {
    console.log('Selected gender:', this.prefGender);
  }

  @Output() formalitySelected = new EventEmitter<string>();
  selectedFormality: string = 'formal';

  formalityChanged() {
    this.formalitySelected.emit(this.selectedFormality);
  }

  //**************Complicated dropdown**************
  // isDropdownActive = false;
  // genderList = [
  //   { name: 'genderMale', value: 'male' },
  //   { name: 'genderFemale', value: 'female' },
  //   { name: 'genderOther', value: 'other' },
  // ];

  // selectGender(gender: any) {
  //   this.prefGender = gender;
  // }

  // clearSelection() {
  //   this.prefGender = undefined;
  // }
  //**************Complicated dropdown**************
}
