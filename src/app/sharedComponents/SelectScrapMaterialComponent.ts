import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgOption } from '@ng-select/ng-select';

@Component({
  selector: 'select-scarp-material-name',
  template: `
  <div class="d-flex flex-column">
  <div class="d-flex flex-row">
      <div>
          <label>Scarp Material Name</label>
      </div>
      <div>
          <a class="danger" (click)="openscarpMaterial(content)">&nbsp;<i class=" fa fa-plus-circle font-medium-1 "></i></a>
      </div>
  </div>
  <div>
      <ng-select #scrapMaterialSelect  [items]="scrapMaterial " [formControl]="formControl " [selectOnTab]="true" labelForId="scrapMaterial" placeholder="Select Scrap Material">
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
          <app-create-raw-product></app-create-raw-product>
          </div>
      </form>
  </div>
  <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="modal.close('Save click')">Save</button>
  </div>
</ng-template>
`
})
export class SelectScrapMaterialComponent extends FieldType {
  closeResult: string;
  constructor(private modalService: NgbModal) {
    super();
  }
  scrapMaterial: NgOption[] = [
    { value: 'scrapMaterial 1', label: 'scrapMaterial 1' },
    { value: 'scrapMaterial 2', label: 'scrapMaterial 2' },
    { value: 'scrapMaterial 3', label: 'scrapMaterial 3' },
  ];
  // Modal
  openscarpMaterial(content) {
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
