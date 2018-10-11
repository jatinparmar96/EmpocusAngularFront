import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormDataService } from '../../../shared/services/form-data.service';
import { Router,ActivatedRoute } from '@angular/router';


//Denotes the current step in the form wizard. For now it is manual.
const current_step = 1
@Component({
  selector: 'app-company-other-details',
  templateUrl: './company-other-details.component.html',
  styleUrls: ['./company-other-details.component.scss']
})
export class CompanyOtherDetailsComponent implements OnInit {
  company_data:FormGroup;
  constructor(private fb:FormBuilder,
              private fdService:FormDataService,
              private router:Router,
              private route:ActivatedRoute
             ) {

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
      "branch_gst_number":[buffer[2],Validators.required],
      "company_iec_number":[buffer[3],Validators.required],
      "company_epc_number":[buffer[4],Validators.required],
      "company_ssi_number":[buffer[5],Validators.required],
      "company_nsic_number":[buffer[6],Validators.required],
      "company_udyog_aadhaar":[buffer[7],Validators.required],
      "company_tds_number":[buffer[8],Validators.required],
      "company_division_code":[buffer[9],Validators.required],
      "company_cin_number":[buffer[10],Validators.required],
      "company_logo":[buffer[11],Validators.required],
      "id":['new'],   
      
    });          
   }

  ngOnInit() {
  }

 
  //If company_id is null or was not created this method will fail.

 toNext(data)
 {  
  this.fdService.toNext(data.value,current_step);
  this.router.navigateByUrl('setupCompany/BranchDetails/');
  
//    this.fdService.storeData('admin/company_other_details',data.value).then(data=>{
// //data received is the company_id will be required to create branch of this company.
// //for now raw data is used in future Hashed Value will be used
//     console.log(data);
    
  
//   }).catch(error=>{
//     console.log(error);
//   });
   
  //Go back to previous step 
  //Right now this will create a new company and the earlier company wont be deleted
  // #TOBEFIXED
 }
  toPrevious(data)
  {
   this.fdService.toPrevious(data.value,current_step);
   console.log(this.fdService.getData());
   this.router.navigateByUrl('setupCompany');
  }
}
