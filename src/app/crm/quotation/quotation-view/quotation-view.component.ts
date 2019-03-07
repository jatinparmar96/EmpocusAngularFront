import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'app/shared/services/api.service';
import { ShareService } from 'app/shared/services/share.service';

@Component({
  selector: 'app-quotation-view',
  templateUrl: './quotation-view.component.html',
  styleUrls: ['./quotation-view.component.scss']
})
export class QuotationViewComponent implements OnInit {

  rows:any
  link:any = '/crm/quotation/new';
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
    this.router.navigateByUrl('/crm/quotation/'+id);
  }
  toCreate()
  {
    this.router.navigateByUrl('/crm/quotation/new');
  }
  toNext() {
    this.router.navigateByUrl('crm/quotation/new');
  }
  show(id)
  {
    this.router.navigateByUrl('/crm/quotation/show/'+id);
  }

  getData(page = 1){

		this.apiService.get('admin/crm/quotation?page='+page)
		.then( data => {
      let l_data:any = data;
      l_data = l_data.data;
      this.rows = l_data.data;
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
