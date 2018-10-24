import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import {NgbTimepickerConfig} from '@ng-bootstrap/ng-bootstrap';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'select-by-product-name',
  providers: [NgbTimepickerConfig] ,
  template: `
  <label>Time</label>
<ngb-timepicker [formControl]="formControl" [(ngModel)]="time"></ngb-timepicker>
  `
})
export class TimefieldComponent extends FieldType {
  // time: NgbTimeStruct = {hour: 13, minute: 30, second: 0};

  constructor(config: NgbTimepickerConfig) {
    super();
    // customize default values of ratings used by this component tree
    config.seconds = true;
    config.spinners = false;
  }
} 

