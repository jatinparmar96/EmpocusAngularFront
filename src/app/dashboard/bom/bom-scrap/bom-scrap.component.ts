import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bom-scrap',
  templateUrl: './bom-scrap.component.html',
  styleUrls: ['./bom-scrap.component.scss']
})
export class BomScrapComponent implements OnInit {

  constructor(
    private router:Router,
  )
   { }

  ngOnInit() {
  }

  toNext(){
    this.router.navigateByUrl('/dashboard/bom/byproduct');
  }
  toPrevious(){
    this.router.navigateByUrl('/dashboard/bom/process');
  }
}
