import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Router } from '@angular/router';
import { ApiService } from 'app/shared/services/api.service';
import { ShareService } from 'app/shared/services/share.service';

@Component({
  selector: 'app-bank-master-view',
  templateUrl: './bank-master-view.component.html',
  styleUrls: ['./bank-master-view.component.scss']
})

export class BankMasterViewComponent implements OnInit {
 rows:any
 link:any = '/dashboard/bank-master/new';
 paginationData:any = {
  total: 0,
  from: 0,
  to: 0,
  prev_page_url: null,
  next_page_url: null,
  per_page: 20,
  current_page: 1
};
source: LocalDataSource;
  constructor(
    private router:Router,
    private apiService:ApiService,
    private shareService:ShareService
  )
  {
    this.shareService.setVisibility(true)
    this.shareService.setLink(this.link);                 
  }

  ngOnInit() {
    this.getData();
  }
  toCreate()
  {
    this.router.navigateByUrl('/dashboard/bank-master/new');
  }
  edit(bank_id)
  {
    this.router.navigateByUrl('/dashboard/bank-master/'+bank_id);
  }
  getData(page = 1){
		this.apiService.get('admin/bank?page='+page)
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
