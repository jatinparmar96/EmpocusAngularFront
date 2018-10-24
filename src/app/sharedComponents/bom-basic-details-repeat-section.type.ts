import { Component } from '@angular/core';
import { FieldArrayType, FormlyFormBuilder } from '@ngx-formly/core';

@Component({
  selector: 'formly-repeat-section',
  template: `
    <div *ngFor="let field of field.fieldGroup; let i = index;">
      <formly-group
        [field]="field"
        [options]="options"
        [form]="formControl">
        <div class="d-flex align-items-center col-lg-1" style="margin-top: 15px;">
        <a class="danger" (click)="remove(i)">&nbsp;<i class=" fa fa-times font-medium-1 "></i></a>
        </div>
      </formly-group>
    </div>
    <div style="margin:30px 0;">
      <button class="btn btn-primary btn-raised" type="button" (click)="add()">{{ field.fieldArray.templateOptions.btnText }}</button>
    </div>
  `,
})
export class BomBasicDetailsRepeatTypeComponent extends FieldArrayType {
  constructor(builder: FormlyFormBuilder) {
    super(builder);
  }
}
