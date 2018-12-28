import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-quotation-table-rows',
  templateUrl: './quotation-table-rows.component.html',
  styleUrls: ['./quotation-table-rows.component.scss']
})
export class QuotationTableRowsComponent implements OnInit {

  @Input() products: any;

  constructor() {
  }

  ngOnInit() {
  }

  deleteFieldValue(index) {

  }
}
