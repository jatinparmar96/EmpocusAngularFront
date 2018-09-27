import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unitofmeasurement-view',
  templateUrl: './unitofmeasurement-view.component.html',
  styleUrls: ['./unitofmeasurement-view.component.scss']
})
export class UnitofmeasurementViewComponent implements OnInit {
  rows:any
  constructor(
    private apiService:ApiService,
    private router:Router
  ) { 
    apiService.get('admin/getUom').then(data=>{
      let l_data :any = data
      if(l_data.status)
      {
        this.rows =l_data.uoms;                                         
      }
    })
  }

  ngOnInit() {
  }
  toNext()
  {
    this.router.navigateByUrl('dashboard/uom/create');
  }
}
