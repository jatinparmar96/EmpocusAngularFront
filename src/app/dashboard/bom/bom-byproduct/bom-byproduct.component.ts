import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig, FieldType } from '@ngx-formly/core';
import { NgOption } from '@ng-select/ng-select';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormDataService } from 'app/shared/services/form-data.service';

@Component({
  selector: 'app-bom-byproduct',
  templateUrl: './bom-byproduct.component.html',
  styleUrls: ['./bom-byproduct.component.scss']
})
export class BomByproductComponent implements OnInit {

  closeResult: string;
  current_step = 3;
  constructor(
    private router:Router,
    private modalService: NgbModal,
    private formService:FormDataService
  )
   { 
    
   }

  ngOnInit() {
  }

  toNext(bom){
    this.formService.toNext(bom.value,this.current_step);
    console.log(this.formService.getData());
    this.router.navigateByUrl('/dashboard/bom/scrap');
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
    byProduct: [{}],
  };
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'byProduct',
      type: 'repeatit',
      fieldArray: {
        fieldGroupClassName: 'row',
        templateOptions: {
          btnText: 'Add new by Product',
        },
        fieldGroup: [
          {
            key:'selectByProduct',
            type: 'selectByProduct',
            className: 'col-lg-3',
            templateOptions: {
              label: 'Select By-Product:',
            },
          },
          {
            key:'byProductUOM',
            type: 'uom',
            className: 'col-lg-3',
            templateOptions: {
              label: 'UOM:',
            },
          },
          {
            type: 'input',
            key: 'byproductQty',
            className: 'col-lg-2',
            templateOptions: {
              type: 'number',
              label: 'Qty:',
            },
          },
        ],
      },
    }
  ];

  submit() {
    alert(JSON.stringify(this.model));
  }

}
