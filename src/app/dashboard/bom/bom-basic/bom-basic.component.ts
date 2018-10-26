import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'app/shared/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormDataService } from 'app/shared/services/form-data.service';
import { ShareService } from 'app/shared/services/share.service';
import { NotifyService } from 'app/shared/services/notify.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormlyFormOptions, FormlyFieldConfig, FieldType } from '@ngx-formly/core';
import { NgOption } from '@ng-select/ng-select';

@Component({
  selector: 'app-bom-basic',
  templateUrl: './bom-basic.component.html',
  styleUrls: ['./bom-basic.component.scss']
})
export class BomBasicComponent implements OnInit {

  closeResult: string;
  current_step = 1;
  constructor(
    private router:Router,
    private modalService: NgbModal,
    private formService:FormDataService
  )
   { }

  ngOnInit() {
  }

  toNext(bom){
    this.formService.toNext(bom.value,this.current_step);
    console.log(this.formService.getData)
    this.router.navigateByUrl('/dashboard/bom/process');
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
    investments: [{}],
  };
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-4',
          type: 'input',
          key: 'bomItemName',
          templateOptions: {
            label: 'Item Name',
          },
        },
        {
          className: 'col-4',
          type: 'input',
          key: 'bomItemCode',
          templateOptions: {
            label: 'Item Code',
          },
        },
        {
          className: 'col-4',
          type: 'input',
          key: 'bomQty',
          templateOptions: {
            type: 'number',
            label: 'Quantity',
          },
        },
      ],
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-4',
          type: 'input',
          key: 'bomName',
          templateOptions: {
            label: 'BOM Name',
          },
        },
        {
          className: 'col-4',
          type: 'input',
          key: 'bomnumber',
          templateOptions: {
            type: 'number',
            label: 'BOM Number',
            //required: true,
          },
        },
        {
          className: 'col-4',
          key: 'bomdate',
          type: 'input',
          templateOptions: {
            type: 'date',
            label: 'BOM Date',
            //required: true,
          },
        },
      ],
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-4',
          type: 'input',
          key: 'bomRevisionNumber',
          templateOptions: {
            type: 'number',
            label: 'Revision Number',
          },
        },
        {
          className: 'col-4',
          key: 'bomRevDate',
          type: 'input',
          templateOptions: {
            type: 'date',
            label: 'Revision Date',
            //required: true,
          },
        },
        {
          key:'bomUOM',
          type: 'uom',
          className: 'col-lg-4',
        },
      ],
    },
  ];

  // submit() {
  //   alert(JSON.stringify(this.model));
  // }

}

