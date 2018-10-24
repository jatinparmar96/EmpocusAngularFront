import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgOption } from '@ng-select/ng-select';

@Component({
  selector: 'select-wastage-name',
  template: `
  <div class="d-flex flex-column">
  <div class="d-flex flex-row">
      <div>
          <label>Wastage Name</label>
      </div>
      
  </div>
  <div>
      <ng-select #wastageSelect  [items]="wastage " [formControl]="formControl " [selectOnTab]="true"  labelForId="wastage" placeholder="Select Wastage">
      </ng-select>
  </div>
</div>

`
})
export class SelectWastageComponent extends FieldType {
  closeResult: string;
  constructor(private modalService: NgbModal) {
    super();
  }
  wastage: NgOption[] = [
    { value: 'wastage 1', label: 'wastage 1' },
    { value: 'wastage 2', label: 'wastage 2' },
    { value: 'wastage 3', label: 'wastage 3' },
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
}