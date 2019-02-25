import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'app/shared/services/api.service';
import { ShareService } from 'app/shared/services/share.service';

@Component({
  selector: 'app-appointment-view',
  templateUrl: './appointment-view.component.html',
  styleUrls: ['./appointment-view.component.scss']
})
export class AppointmentViewComponent implements OnInit {

  rows:any
  link:any = '/crm/appointment/new';
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
    this.router.navigateByUrl('/crm/appointment/'+id);
  }
  toCreate()
  {
    this.router.navigateByUrl('/crm/appointment/new');
  }
  toNext() {
    this.router.navigateByUrl('crm/appointment/new');
  }
  show(id)
  {
    this.router.navigateByUrl('/crm/appointment/show/'+id);
  }

  getData(page = 1){

		this.apiService.get('admin/crm/appointment?page='+page)
		.then( data => {
      let l_data:any = data;
      l_data = l_data.data;
      this.rows = l_data.data;
      console.log(this.rows);
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

