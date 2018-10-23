import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../shared/services/api.service';
import { ShareService } from 'app/shared/services/share.service';

@Component({
  selector: 'app-view-branch-master',
  templateUrl: './view-branch-master.component.html',
  styleUrls: ['./view-branch-master.component.scss']
})
export class ViewBranchMasterComponent implements OnInit {
  rows: any;
  link:any = '/dashboard/branch-master/new';
  constructor(
        private router:Router,
        private apiService:ApiService,
        private shareService:ShareService 
  ) {  
    this.shareService.setVisibility(true)
    this.shareService.setLink(this.link);
 }

  ngOnInit() {
        this.apiService.get('admin/branch').then(data=>
          {
            let result:any = data
            if(result.status)
            {
              this.rows = result.data.data  
            }
          })

  }
  edit(branch_id)
  {
    this.router.navigateByUrl('/dashboard/branch-master/'+branch_id);
  }
  show(branch_id)
  {
    this.router.navigateByUrl('/dashboard/branch-master/detail/'+branch_id);
  }
  toNext()
  {
    this.router.navigateByUrl('/dashboard/branch-master/new');
  }


}
