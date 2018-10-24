import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgOption } from '@ng-select/ng-select';
// Select Product Type Ends
//Trade Name starts
@Component({
  selector: 'trade-name',
  // templateUrl: './other.component.html'
  template: `
  <div class="d-flex flex-column">
    <div class="d-flex flex-row">
        <div>
            <label>Product Trade Name</label>
        </div>
    </div>
    <div>
        <ng-select #processesSelect  [items]="processes " [formControl]="formControl " [selectOnTab]="true " labelForId="process " placeholder="Select Product ">
        </ng-select>
    </div>
</div>

  `
})
export class BomTradeNameComponent extends FieldType {
  closeResult: string;
  constructor(private modalService: NgbModal) {
    super();
  }
  processes: NgOption[] = [
    { value: 'Product Trade Name 1', label: 'Product Trade Name 1' },
    { value: 'Product Trade Name 2', label: 'Product Trade Name 2' },
    { value: 'Product Trade Name 3', label: 'Product Trade Name 3' },
  ];
  // Modal
  openTradeName(content) {
    // this.modalService.open(content, { size: 'lg' });
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
} //Trade Name Ends
