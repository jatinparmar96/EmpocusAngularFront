import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormDataService } from '../../../shared/services/form-data.service';
import { Router } from '@angular/router';

const current_step = 3
@Component({
  selector: 'app-company-other-details',
  templateUrl: './company-other-details.component.html',
  styleUrls: ['./company-other-details.component.scss']
})
export class CompanyOtherDetailsComponent implements OnInit {
  company_data:FormGroup;
  constructor(private fb:FormBuilder,private fdService:FormDataService,private router:Router) {

    let data:any = this.fdService.getStepData(current_step); 
    let buffer:any=['','','','']
    if(data !== undefined)
    {
     buffer = Object.keys(data).map(i => data[i]);
     console.log(buffer);
    }
    this.company_data = fb.group({
      "company_pan_number":[buffer[0],Validators.required],
      "company_tan_number":[buffer[1],Validators.required],
      "company_gst_number":[buffer[2],Validators.required],
      "company_ecc_number":[buffer[3],Validators.required],
      "company_division_code":[buffer[4],Validators.required],
      "company_cin_number":[buffer[5],Validators.required],
      "company_logo":[buffer[6],Validators.required]
    });

   }

  ngOnInit() {
  }
 toNext()
 {
   this.router.navigateByUrl('/dashboard')
 }
  toPrevious(data,current_step)
  {
   this.fdService.toPrevious(data.value,current_step);
   console.log(this.fdService.getData());
   this.router.navigateByUrl('setupCompany/BankDetails');
  }
}
