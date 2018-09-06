import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import{FormDataService} from '../../../shared/services/form-data.service';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';
const current_step:number = 0;
@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent implements OnInit {

  company_data:FormGroup;
  
  constructor(private router:Router , private fdService:FormDataService,private fb:FormBuilder) {
      let data:any = this.fdService.getStepData(current_step); 
      let buffer:any=['','','','']
      if(data !== undefined)
      {
        buffer = Object.keys(data).map(i => data[i]);
      }
      this.company_data = fb.group({
            "company_name": [buffer[0],Validators.required],
            "company_display_name": [buffer[1],Validators.required],
            "company_fax_number":[buffer[2],Validators.required],
            "company_website":[buffer[3],Validators.required]
          });
   }
  ngOnInit() {
  }

  toNext(data)
  {
    this.fdService.toNext(data.value,current_step);
  	console.log(this.fdService.getData());
    this.router.navigateByUrl('setupCompany/BranchDetails');
  }
}
