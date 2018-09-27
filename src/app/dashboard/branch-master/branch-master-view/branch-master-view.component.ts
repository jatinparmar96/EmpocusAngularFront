import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { ApiService } from '../../../shared/services/api.service';
import {NgxDatatableModule } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-branch-master-view',
  templateUrl: './branch-master-view.component.html',
  styleUrls: ['./branch-master-view.component.scss']
})
export class BranchMasterViewComponent implements OnInit {

  settings = {
    columns: {
      name: {
      title: 'Branch Name',
      filter: false,
      },
      gst_number: {
      title: 'Gst Number',
      filter: false,
      },
      code: {
      title: 'Branch Code',
      filter: false,
      },

    },
    attr: {
      class: "table table-responsive"
    },
    edit:{
      editButtonContent: '<i class="ft-edit-2 info font-medium-1 mr-2"></i>'
    },
    delete:{
      deleteButtonContent: '<i class="ft-x danger font-medium-1 mr-2"></i>'
    },
    actions:{
      add:false
    }
  }
  columns=[
    {prop: 'id'},
    {name: 'Name' },
    {name:'Gst Number'},
    {name:'Code'}
  ]
  rows:any
  constructor(
    private router:Router,
    private apiService:ApiService
  )
  {
      apiService.get('admin/getBranches').then(data=>{
        let l_data :any = data
        if(l_data.status)
        {
          this.rows =(l_data.branches);                                         
        }
      })
      
  }

  ngOnInit() {
  }
  toNext()
  {
    this.router.navigateByUrl('dashboard/branch-master/create');
  }
}

