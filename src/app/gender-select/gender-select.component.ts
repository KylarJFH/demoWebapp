import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gender-select',
  template: `
    <select id="box" [(ngModel)]="selectedFormality" (change)="formalityChanged()">
      <option value="formal">formal</option>
      <option value="informal">informal</option>
    </select>

    <select id="box" [(ngModel)]="prefGender" (ngModelChange)="setPrefGender()">
      <option value="" [disabled]="prefGender === 'selectGender'">{{'selectGender' | translate}}</option>
      <option value="male">{{'gender.male' | translate}}</option>
      <option value="female">{{'gender.female' | translate}}</option>
      <option value="other">{{'gender.other' | translate}}</option>
    </select>

    <!-- **************Complicated dropdown************** -->
    <!-- <div id="button" (click)="isDropdownActive=true">
      <div id="components-havegap">
        <div>{{ prefGender?.name || 'selectGender' | translate }}</div>
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
