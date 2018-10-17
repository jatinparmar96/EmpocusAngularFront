import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'app/shared/services/api.service';

@Component({
  selector: 'app-view-charts-of-account',
  templateUrl: './view-charts-of-account.component.html',
  styleUrls: ['./view-charts-of-account.component.scss']
})
export class ViewChartsOfAccountComponent implements OnInit {
  rows:any
  constructor(
    private router:Router,
    private apiService:ApiService
  ) 
  {
    this.apiService.get('admin/coa').then(data=> {
      let result:any = data
      console.log(result);
      if(result.status)
      {
        this.rows = result.data.data
      }
    }).catch(error=>{
      console.log(error);
    })
  }
  
  ngOnInit() {
  }
  toCreate()
  {
    this.router.navigateByUrl('/dashboard/charts-of-accounts/new');
  }
  edit(coa_data)
  {
      this.router.navigateByUrl('/dashboard/charts-of-accounts/'+ coa_data);
  }

}
