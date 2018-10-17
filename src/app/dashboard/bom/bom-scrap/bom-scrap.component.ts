import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';


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

  toNext(){
    this.router.navigateByUrl('/dashboard/bom/byproduct');
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
          btnText: 'Add Scrap Products',
        },
        fieldGroup: [
          {
            className: 'col-lg-4',
            type: 'input',
            key: 'ScrapName',
            templateOptions: {
              label: 'Scrap Name:',
              required: true,
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
