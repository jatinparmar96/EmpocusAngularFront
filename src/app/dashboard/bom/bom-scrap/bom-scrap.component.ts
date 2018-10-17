import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig, FieldType } from '@ngx-formly/core';
import { NgOption } from '@ng-select/ng-select';


@Component({
  selector: 'app-bom-scrap',
  templateUrl: './bom-scrap.component.html',
  styleUrls: ['./bom-scrap.component.scss']
})
export class BomScrapComponent implements OnInit {

  constructor(
    private router:Router,
  )
   { }

  ngOnInit() {
  }

  toFinish(){
    this.router.navigateByUrl('/dashboard/bom/new');
  }
  toPrevious(){
    this.router.navigateByUrl('/dashboard/bom/byproduct');
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
          btnText: 'Add Scrap Products',
        },
        fieldGroup: [
          {
            key:'scrapName',
            type: 'select',
            className: 'col-lg-4',
            templateOptions: {
              label: 'Scarp Product Name:',
            },
          },
          {
            type: 'input',
            key: 'scrapQty',
            className: 'col-lg-2',
            templateOptions: {
              label: 'Scrap Qty:',
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
  selector: 'select-scarp-product-name',
  template: `
  <ng-select #scrapsSelect [items]="scraps" [formControl]="formControl" [selectOnTab]="true" bindValue="value" labelForId="scrap" placeholder="Select Scrap Product">
  </ng-select>
`
})
export class SelectScarpProductComponent extends FieldType {
  scraps: NgOption[] = [
    { value: 'scrapProduct 1', label: 'scrapProduct 1' },
    { value: 'scarpProduct 2', label: 'scrapProduct 2' },
    { value: 'scarpProduct 3', label: 'scrapProduct 3' },
];

}
