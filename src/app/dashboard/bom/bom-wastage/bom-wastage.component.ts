import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig, FieldType } from '@ngx-formly/core';
import { NgOption } from '@ng-select/ng-select';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-bom-wastage',
  templateUrl: './bom-wastage.component.html',
  styleUrls: ['./bom-wastage.component.scss']
})
export class BomWastageComponent implements OnInit {

  constructor(
    private router:Router,
  )
   { }

  ngOnInit() {
  }

  toFinish(){
    this.router.navigateByUrl('/dashboard/bom/new');
  }
  form = new FormGroup({});
  model = {
    wastage: [{}],
  };
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'wastage',
      type: 'repeatit',
      fieldArray: {
        fieldGroupClassName: 'row',
        templateOptions: {
          btnText: 'Add New Wastage',
        },
        fieldGroup: [
          {
            key:'selectWastage',
            type: 'selectWastage',
            className: 'col-lg-3',
            templateOptions: {
              label: 'Select Wastage Material:',
            },
          },
          {
            key:'wastageUOM',
            type: 'uom',
            className: 'col-lg-3',
            templateOptions: {
              label: 'UOM:',
            },
          },
          {
            type: 'input',
            key: 'wastageQty',
            className: 'col-lg-2',
            templateOptions: {
              type: 'number',
              label: 'Qty:',
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
