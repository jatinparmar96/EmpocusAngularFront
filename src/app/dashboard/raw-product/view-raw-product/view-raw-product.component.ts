import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../shared/services/api.service';

@Component({
  selector: 'app-view-raw-product',
  templateUrl: './view-raw-product.component.html',
  styleUrls: ['./view-raw-product.component.scss']
})
export class ViewRawProductComponent implements OnInit {

  products:any
  page_controls:any
  constructor(
    private router: Router,
    private apiService: ApiService
  ) {
    apiService.get('admin/raw_product').then(data=>{
      let result :any = data
      if(result.status)
      {
        this.page_controls= result.data
        this.products = result.data.data;
        console.log(this.products);
      }
    }).catch(error =>{
      console.error(error);
    })
   }

  ngOnInit() {
  }
  edit(product_id)
  {
    this.router.navigateByUrl('/dashboard/raw-product/'+product_id);
  }
  toCreate()
  {
    this.router.navigateByUrl('/dashboard/raw-product/new');
  }


}
