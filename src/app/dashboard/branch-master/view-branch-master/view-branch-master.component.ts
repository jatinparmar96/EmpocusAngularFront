import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../shared/services/api.service';

@Component({
  selector: 'app-view-branch-master',
  templateUrl: './view-branch-master.component.html',
  styleUrls: ['./view-branch-master.component.scss']
})
export class ViewBranchMasterComponent implements OnInit {
  rows: any;
  
  constructor(
        private router:Router,
        private apiService:ApiService
  ) { }

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
  toNext()
  {
    this.router.navigateByUrl('/dashboard/branch-master/new');
  }


}
