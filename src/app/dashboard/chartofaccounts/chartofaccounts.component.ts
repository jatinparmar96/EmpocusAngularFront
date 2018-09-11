import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-chartofaccounts',
  templateUrl: './chartofaccounts.component.html',
  styleUrls: ['./chartofaccounts.component.scss']
})
export class ChartofaccountsComponent implements OnInit {

  active= 'today';
  chartOfAccounts: FormGroup;
  constructor(
    private fb:FormBuilder
  ) 
  {
    this.chartOfAccounts= fb.group({
      "ca_company_name":['',Validators.required],
      "ca_company_display_name":['',Validators.required],
      "ca_category":['',Validators.required],
      "ca_code":['',Validators.required],
      "ca_opening_amount":['',Validators.required],
      "ca_opening_type":['',Validators.required],
      "ca_first_name":['',Validators.required],
      "ca_last_name":['',Validators.required],
      "ca_mobile_number":['',Validators.required],
      "ca_fax":['',Validators.required],
      "ca_email":['',Validators.required],
      "ca_website":['',Validators.required],
      "ca_designation":['',Validators.required],
      "ca_branch":['',Validators.required],
      "ca_address_building":['',Validators.required],
      "ca_address_road_name":['',Validators.required],
      "ca_address_landmark":['',Validators.required],
      "ca_address_pincode":['',Validators.required],
      "ca_address_country":['',Validators.required],
      "ca_address_state":['',Validators.required],
      "ca_address_city":['',Validators.required],
      "ca_pan":['',Validators.required],
      "ca_gstn":['',Validators.required],
      "ca_tan":['',Validators.required],
      "ca_commodity":['',Validators.required],
      "ca_ecc_no":['',Validators.required],
      "ca_rc_no":['',Validators.required],
      "ca_division":['',Validators.required],
      "ca_range":['',Validators.required],
      "ca_commissionerate":['',Validators.required],
      "ca_tin_no":['',Validators.required],
      "ca_date_opened_1":['',Validators.required],
      "ca_cst_no":['',Validators.required],
      "ca_date_opened_2":['',Validators.required],
    })
   }

  ngOnInit() {
  }

  onSubmit(data)
  {
    console.log(data.value);  
  }
}
