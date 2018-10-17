import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'app/shared/services/api.service';

@Component({
  selector: 'app-view-category-master',
  templateUrl: './view-category-master.component.html',
  styleUrls: ['./view-category-master.component.scss']
})
export class ViewCategoryMasterComponent implements OnInit {
  rows:any
  constructor(
    private router:Router,
    private apiService:ApiService
  ) { 
    this.apiService.get('admin/product_category').then(data=>{
      let result:any = data 
      if(result.status)
      {
        this.rows = result.data.data
      }
    })
  }

  ngOnInit() {
  }
  edit(id)
  {
    this.router.navigateByUrl('/dashboard/category/'+id);
  }
  toCreate()
  {
    this.router.navigateByUrl('/dashboard/category/new');
  }
}
