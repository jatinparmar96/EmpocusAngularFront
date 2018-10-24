import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgOption } from '@ng-select/ng-select';
@Component({
  selector: 'select-by-product-name',
  template: `
  <div class="d-flex flex-column">
  <div class="d-flex flex-row">
      <div>
          <label>By-Product Name</label>
      </div>
      
  </div>
  <div>
      <ng-select #byProductSelect [items]="byProduct"  [formControl]="formControl " [selectOnTab]="true"  labelForId="byProduct" placeholder="Select By-Product">
      </ng-select>
  </div>
</div>
`
})
export class SelectByProductCompo extends FieldType {
  closeResult: string;
  constructor(private modalService: NgbModal) {
    super();
  }
  byProduct: NgOption[] = [
    { value: 'byProduct 1', label: 'byProduct 1' },
    { value: 'byProduct 2', label: 'byProduct 2' },
    { value: 'byProduct 3', label: 'byProduct 3' },
  ];
  // Modal
  openbyProduct(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title',size:'lg',centered: true }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    }
    else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    }
    else {
      return `with: ${reason}`;
    }
  }
} // Select UOM Ends
