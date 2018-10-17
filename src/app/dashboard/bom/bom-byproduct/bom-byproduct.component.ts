import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig, FieldType } from '@ngx-formly/core';
import { NgOption } from '@ng-select/ng-select';

@Component({
  selector: 'app-bom-byproduct',
  templateUrl: './bom-byproduct.component.html',
  styleUrls: ['./bom-byproduct.component.scss']
})
export class BomByproductComponent implements OnInit {

  constructor(
    private router:Router,
  )
   { }

  ngOnInit() {
  }

  toNext(){
    this.router.navigateByUrl('/dashboard/bom/scrap');
  }
  toPrevious(){
    this.router.navigateByUrl('/dashboard/bom/process');
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
          btnText: 'Add By-Products',
        },
        fieldGroup: [
          {
            key:'byProductName',
            type: 'select',
            className: 'col-lg-4',
            templateOptions: {
              label: 'By-Product Name:',
            },
          },
          {
            type: 'input',
            key: 'byProductQty',
            className: 'col-lg-2',
            templateOptions: {
              label: 'By-Product Qty:',
              required: true,
            },
          },
          {
            type: 'input',
            key: 'uom',
            className: 'col-lg-1',
            templateOptions: {
              label: 'UOM:',
              required: true,
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
  selector: 'select-by-product-name',
  template: `
  <ng-select #byproductsSelect [items]="byproducts" [formControl]="formControl" [selectOnTab]="true" bindValue="value" labelForId="byproduct" placeholder="Select By-Product">
  </ng-select>
`
})
export class SelectByProductComponent extends FieldType {
  byproducts: NgOption[] = [
    { value: 'byProduct 1', label: 'byProduct 1' },
    { value: 'byProduct 2', label: 'byProduct 2' },
    { value: 'byProduct 3', label: 'byProduct 3' },
];

}

