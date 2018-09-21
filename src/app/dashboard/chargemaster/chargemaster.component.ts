import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../shared/services/api.service';
import { FormDataService } from '../../shared/services/form-data.service';

@Component({
  selector: 'app-chargemaster',
  templateUrl: './chargemaster.component.html',
  styleUrls: ['./chargemaster.component.scss']
})
export class ChargemasterComponent implements OnInit {
  chargeMaster:FormGroup
  isProcessing:boolean= false;
  constructor(
    private fb:FormBuilder,
    private apiService:ApiService,
    private formService:FormDataService,
  ) { }

  ngOnInit() {
    this.chargeMaster = this.fb.group({
        "charges_master_display_name":['',Validators.required],
        "charges_master_charge_type":['',Validators.required],
        "charges_master_purchase_account":['',Validators.required],
        "charges_master_sales_account":['',Validators.required],
        "raw_product_purchase_percentage":['',Validators.required],
        "charges_master_decimal_place":['',Validators.required],
    })
  }

  onSubmit(chargeMaster)
  {
    this.isProcessing = true;
    this.formService.storeData('admin/addCharges',chargeMaster.value).then(data=>{
          let status :any = data 
          if(status.status){
            
          }
    })
  }

}
