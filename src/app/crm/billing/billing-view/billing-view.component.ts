import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'app/shared/services/api.service';
import { ShareService } from 'app/shared/services/share.service';

@Component({
  selector: 'app-billing-view',
  templateUrl: './billing-view.component.html',
  styleUrls: ['./billing-view.component.scss']
})
export class BillingViewComponent implements OnInit {

  rows:any
  link:any = '/crm/billing/new';
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
    private router:Router,
    private apiService:ApiService,
    private shareService:ShareService
  ) {
    this.shareService.setVisibility(true)
    this.shareService.setLink(this.link);
  }

  ngOnInit() {
    this.getData()
  }
  edit(id)
  {
    this.router.navigateByUrl('/crm/billing/'+id);
  }
  toCreate()
  {
    this.router.navigateByUrl('/crm/billing/new');
  }
  toNext() {
    this.router.navigateByUrl('crm/billing/new');
  }
  show(id)
  {
    this.router.navigateByUrl('/crm/billing/show/'+id);
  }

  getData(page = 1){
    
		this.apiService.get('admin/crm/billing'+page)
		.then( data => {

      let l_data:any = data;
      this.rows = l_data.data;
      console.log(this.rows)
      this.paginationData = {
				total: l_data.meta.total,
				from: l_data.meta.from,
				to: l_data.meta.to,
				prev_page_url: l_data.links.prev_page_url,
				next_page_url: l_data.links.next_page_url,
				per_page: l_data.meta.per_page,
				current_page: l_data.meta.current_page,
				id: 'get_list'
			}
		})
	}
}

