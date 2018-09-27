import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank-master-view',
  templateUrl: './bank-master-view.component.html',
  styleUrls: ['./bank-master-view.component.scss']
})
export class BankMasterViewComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }
  toNext()
  {
    this.router.navigateByUrl('branch-master/create');
  }
}
