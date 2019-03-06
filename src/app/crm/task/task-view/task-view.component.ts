import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'app/shared/services/api.service';
import { ShareService } from 'app/shared/services/share.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  rows:any
  link:any = '/crm/task/new';
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
    this.router.navigateByUrl('/crm/task/'+id);
  }
  toCreate()
  {
    this.router.navigateByUrl('/crm/task/new');
  }
  toNext() {
    this.router.navigateByUrl('crm/task/new');
  }
  show(id)
  {
    this.router.navigateByUrl('/crm/task/show/'+id);
  }

  getData(page = 1){

		this.apiService.get('admin/crm/task'+page)
		.then( data => {

      let l_data:any = data;
      this.rows = l_data.data;
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
