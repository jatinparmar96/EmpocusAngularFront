import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/shared/services/api.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ShareService } from 'app/shared/services/share.service';

@Component({
  selector: 'app-show-charts-of-account',
  templateUrl: './show-charts-of-account.component.html',
  styleUrls: ['./show-charts-of-account.component.scss']
})
export class ShowChartsOfAccountComponent implements OnInit {

  id:any
  chart_of_account:any
  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private shareService: ShareService,
    private router:Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
			if(params['id']=='new'){
        this.id="new";
			}else{
				this.id = +params['id']; // (+) converts string 'id' to a number
        this.getData(this.id);
			}
    });
  }
  getData(id:any){
		this.apiService.get("admin/coa/"+id)
		.then(data => { 
      let l_data: any = data;	
     this.chart_of_account = l_data.data
		})
	}

}
