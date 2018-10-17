import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig, FieldType } from '@ngx-formly/core';
import { NgOption } from '@ng-select/ng-select';

@Component({
  // formly-app-example
  selector: 'app-bom-process',
  templateUrl: './bom-process.component.html',
  styleUrls: ['./bom-process.component.scss'],
})
export class BomProcessComponent implements OnInit {

  constructor(
    private router:Router,
  )
   { }

  ngOnInit() {
  }

  toNext(){
    this.router.navigateByUrl('/dashboard/bom/byproduct');
  }
  toPrevious(){
    this.router.navigateByUrl('/dashboard/bom/new');
  }

  form = new FormGroup({});
  model = {
    investments: [{}],
  };
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'investments',
      type: 'repeat',
      fieldArray: {
        fieldGroupClassName: 'row',
        templateOptions: {
          btnText: 'Add new Raw Product',
        },
        fieldGroup: [
          {
            key:'tradeNameSelect',
            type: 'select',
            className: 'col-lg-4',
            templateOptions: {
              label: 'Product Trade Name:',
            },

          },
          {
            type: 'input',
            key: 'processQty',
            className: 'col-lg-2',
            templateOptions: {
              label: 'Process Qty:',
            },
          },
          {
            type: 'input',
            key: 'availableQty',
            className: 'col-lg-2',
            templateOptions: {
              label: 'Available Qty:',
              readOnly: true,
              placeholder: '200',
            },
            expressionProperties: {
              'templateOptions.disabled': '!model.text',
            },
          },
          {
            type: 'input',
            key: 'uom',
            className: 'col-lg-1',
            templateOptions: {
              label: 'UOM:',
              placeholder: 'ltr',
            },
            expressionProperties: {
              'templateOptions.disabled': '!model.text',
            },
          },
        ],
      },
    },
  ];

  submit() {
    alert(JSON.stringify(this.model));
  }

}

@Component({
  selector: 'trade-name',
  template: `
  <ng-select #processesSelect [items]="processes" [formControl]="formControl" [selectOnTab]="true" bindValue="value" labelForId="process" placeholder="Select Product">
  </ng-select>
`
})
export class TradeNameComponent extends FieldType {
  processes: NgOption[] = [
    { value: 'Product Trade Name 1', label: 'Product Trade Name 1' },
    { value: 'Product Trade Name 2', label: 'Product Trade Name 2' },
    { value: 'Product Trade Name 3', label: 'Product Trade Name 3' },
];

}

