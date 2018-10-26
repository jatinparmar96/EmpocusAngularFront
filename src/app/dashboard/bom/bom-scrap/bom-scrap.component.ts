import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig, FieldType } from '@ngx-formly/core';
import { NgOption } from '@ng-select/ng-select';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormDataService } from 'app/shared/services/form-data.service';


@Component({
  selector: 'app-bom-scrap',
  templateUrl: './bom-scrap.component.html',
  styleUrls: ['./bom-scrap.component.scss']
})
export class BomScrapComponent implements OnInit {
  current_step = 4;

  constructor(
    private router:Router,
    private formService:FormDataService
  )
   { }

  ngOnInit() {
  }

  toNext(bom){
    this.formService.toNext(bom.value,this.current_step);
    console.log(this.formService.getData());
    this.router.navigateByUrl('/dashboard/bom/wastage');
  }

  form = new FormGroup({});
  model = {
    scrapMaterial: [{}],
  };
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'scrapMaterial',
      type: 'repeatit',
      fieldArray: {
        fieldGroupClassName: 'row',
        templateOptions: {
          btnText: 'Add new Scrap Material',
        },
        fieldGroup: [
          {
            key:'selectScarpMaterial',
            type: 'selectScarpMaterial',
            className: 'col-lg-3',
            templateOptions: {
              label: 'Select Scrap Material:',
            },
          },
          {
            key:'scarpMaterialUOM',
            type: 'uom',
            className: 'col-lg-3',
            templateOptions: {
              label: 'UOM:',
            },
          },
          {
            type: 'input',
            key: 'scarpQty',
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
