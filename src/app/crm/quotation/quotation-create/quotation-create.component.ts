import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Product, SellingPoint } from '../../product';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-quotation-create',
  templateUrl: './quotation-create.component.html',
  styleUrls: ['./quotation-create.component.scss']
})
export class QuotationCreateComponent implements OnInit {
  fieldArray: Array<any> = [];
  newAttribute: any = {};
  closeResult: String;
  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  getDismissReason(reason) {

  }
  addFieldValue() {

    this.fieldArray.push(this.newAttribute)
    this.newAttribute = {};
  }
deleteFieldValue(index) {
  this.fieldArray.splice(index, 1);
  }
}
