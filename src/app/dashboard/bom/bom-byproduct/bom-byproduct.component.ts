import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

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

  toFinish(){
    this.router.navigateByUrl('/dashboard/bom/new');
  }
  toPrevious(){
    this.router.navigateByUrl('/dashboard/bom/scrap');
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
            className: 'col-lg-4',
            type: 'input',
            key: 'byProductName',
            templateOptions: {
              label: 'By-Product Name:',
              required: true,
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
