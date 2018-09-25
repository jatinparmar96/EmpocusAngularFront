import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { FormDataService } from '../../shared/services/form-data.service';
import * as alertFunctions from '../../shared/data/sweet-alert';

@Component({
  selector: 'app-bank-master',
  templateUrl: './bank-master.component.html',
  styleUrls: ['./bank-master.component.scss']
})
export class BankMasterComponent implements OnInit {
  bank_data :FormGroup
  isProcessing:boolean
  constructor(
    private fb:FormBuilder,
    private formService:FormDataService
  ) {
    this.bank_data = fb.group({
      "bank_account_number":["BOI20199380190",Validators.required],
      "bank_name":["ICICI",Validators.required],
      "bank_ifsc_code":["ICIC007K",Validators.required],
      "bank_branch":["Mumbai",Validators.required],
    })
   }

  ngOnInit() {
  }
  onSubmit(bank_data)
  {
    this.isProcessing = true
    this.formService.storeData('admin/addBank',bank_data.value).then(data=>{
        let status:any = data
        if(status.status)
        {
          alertFunctions.typeSuccess('Bank added Successfully');
        }
        else{

        }
    }).catch(error=>{
      console.log(error)
      this.isProcessing = false;
    })
  }
}
