import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgOption } from '@ng-select/ng-select';



// Select UOM Starts
@Component({
  selector: 'select-UOM',
  template: `
  <div class="d-flex flex-column">
  <div class="d-flex flex-row">
      <div>
          <label>UOM</label>
      </div>
      <div>
          <a class="danger" (click)="openUOM(content)">&nbsp;<i class=" fa fa-plus-circle font-medium-1 "></i></a>
      </div>
  </div>
  <div>
      <ng-select #UOMSelect [items]="UOM " [formControl]="formControl " [selectOnTab]="true" bindValue="value " labelForId="UOM" placeholder="Common UOM">
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
              <app-create-unit-of-measurement></app-create-unit-of-measurement>
          </div>
      </form>
  </div>
  <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="modal.close('Save click')">Save</button>
  </div>
</ng-template>
`
})
export class SelectUOMBOMBasicComponent extends FieldType {
  closeResult: string;
  constructor(private modalService: NgbModal) {
    super();
  }
  UOM: NgOption[] = [
    { value: 'BOM UOM 1', label: 'BOM UOM 1' },
    { value: 'BOM UOM 2', label: 'BOM UOM 2' },
    { value: 'BOM UOM 3', label: 'BOM UOM 3' },
  ];
  // Modal
  openUOM(content) {
    
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title',centered: true }).result.then((result) => {
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
