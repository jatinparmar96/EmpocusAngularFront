import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../shared/services/api.service';
import { ShareService } from 'app/shared/services/share.service';

@Component({
  selector: 'app-view-raw-product',
  templateUrl: './view-raw-product.component.html',
  styleUrls: ['./view-raw-product.component.scss']
})
export class ViewRawProductComponent implements OnInit {

  products:any
  link:any = '/dashboard/raw-product/new';
  paginationData:any = {
		total: 0,
		from: 0,
		to: 0,
		prev_page_url: null,
		next_page_url: null,
		per_page: 20,
		current_page: 1
	};
  constructor(
    private router: Router,
    private apiService: ApiService,
    private shareService:ShareService
  ) {
    this.shareService.setVisibility(true)
    this.shareService.setLink(this.link);
   }

  ngOnInit() {
    this.getData();
  }
  edit(product_id)
  {
    this.router.navigateByUrl('/dashboard/raw-product/'+product_id);
  }
  toCreate()
  {
    this.router.navigateByUrl('/dashboard/raw-product/new');
  }
  show(product_id)
  {
    this.router.navigateByUrl('/dashboard/raw-product/detail/'+product_id);
  }

  getData(page = 1){
		this.apiService.get('admin/raw_product?page='+page)
		.then( data => {
     
      let l_data:any = data;
      l_data = l_data.data;
			this.products = l_data.data;
			this.paginationData = {
				total: l_data.total,
				from: l_data.from,
				to: l_data.to,
				prev_page_url: l_data.prev_page_url,
				next_page_url: l_data.next_page_url,
				per_page: l_data.per_page,
				current_page: l_data.current_page,
				id: 'get_list'
			}
		})
  }
  
}
