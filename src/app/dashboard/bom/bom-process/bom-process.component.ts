import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  // formly-app-example
  selector: 'app-bom-process',
  templateUrl: './bom-process.component.html',
  styleUrls: ['./bom-process.component.scss']
})
export class BomProcessComponent implements OnInit {

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
    this.router.navigateByUrl('/dashboard/bom/raw-material');
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
            className: 'col-lg-4',
            type: 'input',
            key: 'investmentName',
            templateOptions: {
              label: 'Product Trade Name:',
              required: true,
            },
          },
          {
            type: 'input',
            key: 'stockIdentifier',
            className: 'col-lg-2',
            templateOptions: {
              label: 'Process Qty:',
            },
          },
          {
            type: 'input',
            key: 'investmentDate',
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
