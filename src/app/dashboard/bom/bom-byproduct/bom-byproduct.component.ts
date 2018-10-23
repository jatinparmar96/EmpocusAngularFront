import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig, FieldType } from '@ngx-formly/core';
import { NgOption } from '@ng-select/ng-select';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bom-byproduct',
  templateUrl: './bom-byproduct.component.html',
  styleUrls: ['./bom-byproduct.component.scss']
})
export class BomByproductComponent implements OnInit {

  closeResult: string;
  constructor(
    private router:Router,
    private modalService: NgbModal

  )
   { }

  ngOnInit() {
  }

  toNext(){
    this.router.navigateByUrl('/dashboard/bom/scrap');
  }
  toPrevious(){
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
      key: 'investments',
      type: 'repeat2',
      fieldArray: {
        fieldGroupClassName: 'row',
        templateOptions: {
          btnText: 'Add By-Products',
        },
        fieldGroup: [
          {
            key:'byProductName',
            type: 'select2',
            className: 'col-lg-4',
          },
          {
            type: 'input',
            key: 'byProductQty',
            className: 'col-lg-1',
            templateOptions: {
              label: 'Qty:',
              required: true,
            },
          },
          {
              key:'byProductName',
              type: 'select4',
              className: 'col-lg-2',
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
  selector: 'select-by-product-name',
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
      <ng-select #byproductsSelect [items]="byproducts " [formControl]="formControl " [selectOnTab]="true " bindValue="value " labelForId="byproduct" placeholder="Select By-Product">
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
              <p>Content By Product Product Here</p>
          </div>
      </form>
  </div>
  <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="modal.close('Save click')">Save</button>
  </div>
</ng-template>
`
})
export class SelectByProductComponent extends FieldType {
  closeResult: string;
  constructor(
    private modalService: NgbModal
  ){
    super();
  }


  byproducts: NgOption[] = [
    { value: 'byProduct 1', label: 'byProduct 1' },
    { value: 'byProduct 2', label: 'byProduct 2' },
    { value: 'byProduct 3', label: 'byProduct 3' },
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
//Modal`

}


@Component({
  selector: 'select-by-product-name',
  // templateUrl: './other.component.html'
  template: `
  <div class="d-flex flex-column">
  <div class="d-flex flex-row">
      <div>
          <label>UOM</label>
      </div>
      <div>
          <a class="danger" (click)="open1(content)">&nbsp;<i class=" fa fa-plus-circle font-medium-1 "></i></a>
      </div>
  </div>
  <div>
      <ng-select #UOMSelect [items]="UOM " [formControl]="formControl " [selectOnTab]="true " bindValue="value " labelForId="UOM" placeholder="Select UOM">
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
              <p>By Product UOM Content</p>
          </div>
      </form>
  </div>
  <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="modal.close('Save click')">Save</button>
  </div>
</ng-template>
`
})
export class SelectUOMByProductComponent extends FieldType {
  closeResult: string;
  constructor(
    private modalService: NgbModal
  ){
    super();
  }


  UOM: NgOption[] = [
    { value: 'byProduct 1', label: 'byProduct 1' },
    { value: 'byProduct 2', label: 'byProduct 2' },
    { value: 'byProduct 3', label: 'byProduct 3' },
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
//Modal`

}

