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
source: LocalDataSource;
  constructor(
    private router:Router,
    private apiService:ApiService,
    private shareService:ShareService
  )
  {
    this.shareService.setVisibility(true)
    this.shareService.setLink(this.link);
     this.apiService.get('admin/bank').then(data=>{
          let result:any = data 
          if(result.status)
          {
            this.rows = result.data.data
          }
      })                         
  }

  ngOnInit() {
  }
  toCreate()
  {
    this.router.navigateByUrl('/dashboard/bank-master/new');
  }
  edit(bank_id)
  {
    this.router.navigateByUrl('/dashboard/bank-master/'+bank_id);
  }
}

