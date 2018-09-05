import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import{FormDataService} from '../../../shared/services/form-data.service';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})
export class CompanyInfoComponent implements OnInit {

  company_data:FormGroup;
  constructor(private router:Router , private fdService:FormDataService,private fb:FormBuilder) {

      this.company_data = fb.group({
            "company_name": ["CIS",Validators.required],
            "company_display_name": ["CIS",Validators.required],
            "company_fax_number":["123",Validators.required],
            "company_website":["",Validators.required]
          });

   }

  ngOnInit() {
  }

  toNext(data)
  {
    this.fdService.toNext(data.value);
  	console.log(this.fdService.getData());
    this.router.navigateByUrl('setupCompany/BranchDetails');
  }
}
