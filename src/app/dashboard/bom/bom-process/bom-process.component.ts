
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig, FieldType } from '@ngx-formly/core';
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
    private formService:FormDataService
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

@Component({
  selector: 'trade-name',
  // templateUrl: './other.component.html'
  template: `
  <div class="d-flex flex-column">
    <div class="d-flex flex-row">
        <div>
            <label>Product Trade Name</label>
        </div>
        <div>
            <a class="danger" (click)="open1(content)">&nbsp;<i class=" fa fa-plus-circle font-medium-1 "></i></a>
        </div>
    </div>
    <div>
        <ng-select #processesSelect [items]="processes " [formControl]="formControl " [selectOnTab]="true " bindValue="value " labelForId="process " placeholder="Select Product ">
        </ng-select>
    </div>
</div>
<ng-template #content let-modal>
    <div class="modal-header">
        <h4 class="modal-title" id="modal-basic-title">Add New Product</h4>
        <button type="button" class="close" aria-label="Close" (click)="modal.dismiss('Cross click')">
                <span aria-hidden="true">&times;</span>
              </button>
    </div>
    <div class="modal-body">
        <form>
            <div class="form-group">
                <p>Content Here Add Process</p>
            </div>
        </form>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-outline-dark" (click)="modal.close('Save click')">Save</button>
    </div>
</ng-template>
  `
})
export class TradeNameComponent extends FieldType {
  closeResult: string;

  constructor(
    private modalService: NgbModal
  ){
    super();
  }


  processes: NgOption[] = [
    { value: 'Product Trade Name 1', label: 'Product Trade Name 1' },
    { value: 'Product Trade Name 2', label: 'Product Trade Name 2' },
    { value: 'Product Trade Name 3', label: 'Product Trade Name 3' },
];
// Modal
open1(content) {
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
//Modal
}

