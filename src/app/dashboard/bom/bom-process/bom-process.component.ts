
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig, FieldType, FormlyFormBuilder } from '@ngx-formly/core';
import { NgOption } from '@ng-select/ng-select';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormDataService } from 'app/shared/services/form-data.service';

@Component({
  // formly-app-example
  selector: 'app-bom-process',
  templateUrl: './bom-process.component.html',
  styleUrls: ['./bom-process.component.scss'],
})
export class BomProcessComponent implements OnInit {

  closeResult: string;
  current_step = 2;
  constructor(
    private router:Router,
    private modalService: NgbModal,
    private formService:FormDataService,
    private builder:FormlyFormBuilder
  )
  {
    
  }

  ngOnInit() {
  }

  toNext(bom){
    this.formService.toNext(bom.value,this.current_step)
    console.log(this.formService.getData());
    this.router.navigateByUrl('/dashboard/bom/byproduct');
  }
  toPrevious(){
    this.router.navigateByUrl('/dashboard/bom/new');
  }

  // Modal
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  // Modal

  form = new FormGroup({});
  model = {
    manufacture: [{}],
  };
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'manufacture',
      type: 'repeatit',
      fieldArray: {
        fieldGroupClassName: 'row',
        templateOptions: {
          btnText: 'Add new Raw Product',
        },
        fieldGroup: [
          {
            key:'selectTradeName',
            type: 'tradeName',
            className: 'col-lg-3',
            templateOptions: {
              label: 'Product Trade Name:',
            },
          },
          {
            key:'selectProcessType',
            type: 'processType',
            className: 'col-lg-3',
            templateOptions: {
              label: 'Process Type:',
            },
          },
          {
            type: 'input',
            key: 'processQty',
            className: 'col-lg-2',
            templateOptions: {
              type: 'number',
              label: 'Qty:',
            },
          },
          {
            key:'timeField',
            type: 'timeField',
            className: 'col-lg-3',
            templateOptions: {
              // label: 'Time:',
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
