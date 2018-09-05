import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';
import{FormDataService} from '../../../shared/services/form-data.service';


@Component({
  selector: 'app-head-office-info',
  templateUrl: './head-office-info.component.html',
  styleUrls: ['./head-office-info.component.scss']
})
export class HeadOfficeInfoComponent implements OnInit {
 company_data:FormGroup;
  constructor(private fb:FormBuilder,private fdService:FormDataService) { 


  		  this.company_data = fb.group({
            "company_address_building_name":["",Validators.required],
            "company_address_road_name":["",Validators.required],
            "company_address_landmark":["",Validators.required],
            "company_address_pincode":["",Validators.required],
            "company_address_country":["",Validators.required],
            "company_address_state":["",Validators.required],
            "company_address_city":["",Validators.required],
          });
  }

  ngOnInit() {
  }

  toNext(data)
  {
    this.fdService.toNext(data.value);
  	console.log(this.fdService.getData());
   // this.router.navigateByUrl('setupCompany/BranchDetails');
  }
}
