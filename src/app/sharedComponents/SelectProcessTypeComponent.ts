import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgOption } from '@ng-select/ng-select';
// Select Product Type Starts
@Component({
  selector: 'select-by-product-name',
  template: `
  <div class="d-flex flex-column">
  <div class="d-flex flex-row">
      <div>
          <label>Process Type</label>
      </div>
      
  </div>
  <div>
  <ng-select #processTypeSelect  [items]="processType" [formControl]="formControl " [selectOnTab]="true"  labelForId="processType" placeholder="Select Process Type">
  </ng-select>
  </div>
</div>

`
})
export class SelectProcessTypeComponent extends FieldType {
  closeResult: string;
  constructor(private modalService: NgbModal) {
    super();
  }
  processType: NgOption[] = [
    { value: 'processType 1', label: 'processType 1' },
    { value: 'processType 2', label: 'processType 2' },
    { value: 'processType 3', label: 'processType 3' },
  ];
  // Modal
  openprocessType(content) {
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
} // Select Product Type Ends
