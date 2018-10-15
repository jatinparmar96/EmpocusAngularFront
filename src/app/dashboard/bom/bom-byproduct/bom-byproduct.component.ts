import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bom-byproduct',
  templateUrl: './bom-byproduct.component.html',
  styleUrls: ['./bom-byproduct.component.scss']
})
export class BomByproductComponent implements OnInit {

  constructor(
    private router:Router,
  )
   { }

  ngOnInit() {
  }

  toFinish(){
    this.router.navigateByUrl('/dashboard/bom/new');
  }
  toPrevious(){
    this.router.navigateByUrl('/dashboard/bom/scrap');
  }
}
