import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgOption } from '@ng-select/ng-select';

@Component({
  selector: 'app-bom-raw-material',
  templateUrl: './bom-raw-material.component.html',
  styleUrls: ['./bom-raw-material.component.scss']
})
export class BomRawMaterialComponent implements OnInit {
  closeResult: string;
  isProcessing:boolean = false;
  constructor(
    private router:Router,
    private modalService: NgbModal,
    private fb: FormBuilder,
  ) { }

    ages: NgOption[] = [
        { value: '<18', label: 'Under 18' },
        { value: '18', label: '18' },
        { value: '>18', label: 'More than 18' },
    ];

  ngOnInit() {
  }
  toNext(){
    this.router.navigateByUrl('/dashboard/bom/process');
  }

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

}
