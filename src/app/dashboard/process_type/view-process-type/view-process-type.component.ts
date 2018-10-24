import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'app/shared/services/api.service';
import { ShareService } from 'app/shared/services/share.service';

@Component({
  selector: 'app-view-process-type',
  templateUrl: './view-process-type.component.html',
  styleUrls: ['./view-process-type.component.scss']
})
export class ViewProcessTypeComponent implements OnInit {
  rows:any
  page_controls:any
  link:any = '/dashboard/process-type/new';
  visible:boolean
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
    this.shareService.setLink(this.link)  
  }

  ngOnInit() {
    this.getData()
  }
  edit(id)
  {
    this.router.navigateByUrl('/dashboard/process-type/'+id);
  }
  toCreate()
  {
    this.router.navigateByUrl('/dashboard/process-type/new');
  }
  getData(page = 1){
		this.apiService.get('admin/process-type?page='+page)
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
