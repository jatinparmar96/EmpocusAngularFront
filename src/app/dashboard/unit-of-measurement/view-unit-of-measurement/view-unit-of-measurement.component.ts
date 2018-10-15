import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../shared/services/api.service';



@Component({
  selector: 'app-view-unit-of-measurement',
  templateUrl: './view-unit-of-measurement.component.html',
  styleUrls: ['./view-unit-of-measurement.component.scss']
})
export class ViewUnitOfMeasurementComponent implements OnInit {
  
  rows:any
  page_controls:any

  constructor(
    private router:Router,
    private apiService:ApiService
  ) { 
    apiService.get('admin/uom').then(data=>{
      let result :any = data
      if(result.status)
      {
        this.page_controls= result.data
        this.rows = result.data.data;
      }
    }).catch(error =>{
      console.error(error);
    })
    
  }

  ngOnInit() {
  }
  edit(id)
  {
    this.router.navigateByUrl('/dashboard/unit-of-measurement/'+id);
  }
  toCreate()
  {
    this.router.navigateByUrl('/dashboard/unit-of-measurement/new');
  }
}
