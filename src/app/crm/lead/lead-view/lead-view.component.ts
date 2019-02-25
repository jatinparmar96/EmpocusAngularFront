import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'app/shared/services/api.service';
import { ShareService } from 'app/shared/services/share.service';

@Component({
  selector: 'app-lead-view',
  templateUrl: './lead-view.component.html',
  styleUrls: ['./lead-view.component.scss']
})
export class LeadViewComponent implements OnInit {

  rows:any = null;
  link:any = '/crm/lead/new';
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
    this.router.navigateByUrl('/crm/lead/'+id);
  }
  toCreate()
  {
    this.router.navigateByUrl('/crm/lead/new');
  }
  toNext() {
    this.router.navigateByUrl('crm/lead/new');
  }
  show(id)
  {
    this.router.navigateByUrl('/crm/lead/show/'+id);
  }

  getData(page = 1){

		this.apiService.get('admin/crm/leads?page='+page)
		.then( (data:any) => {
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
