import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../shared/services/api.service';
import { ShareService } from '../../shared/services/share.service';
import { FormDataService } from '../../shared/services/form-data.service';
import * as alertFunctions from '../../shared/data/sweet-alert';


@Component({
  selector: 'app-rawproduct',
  templateUrl: './rawproduct.component.html',
  styleUrls: ['./rawproduct.component.scss']
})
export class RawproductComponent implements OnInit {

  rawProduct: FormGroup;
  constructor(
    private fb:FormBuilder,
    private apiService:ApiService,
    private formService:FormDataService,
  ) { 
    this.rawProduct = this.fb.group({

      "raw_product_product_name":['PName',Validators.required],
      "raw_product_display_name":['PDisplayName',Validators.required],
      "raw_product_code":['PC@123',Validators.required],
      "raw_product_UOM":['KG',Validators.required],
      "raw_product_conv_uom":['kg',Validators.required],
      "raw_product_conv_factor":['1',Validators.required],
      "raw_product_batch_type":['0',Validators.required],
      "raw_product_maintain_stock_ledger":['1',Validators.required],
      "raw_product_opening_stock":['10',Validators.required],
      "raw_product_store_location":['G1',Validators.required],
      "raw_product_purchase_rate":['111',Validators.required],
      "raw_product_sales_rate":['12',Validators.required],
      "raw_product_gst_slot":['28%',Validators.required],
      "raw_product_max_level":['2134',Validators.required],
      "raw_product_min_level":['1212',Validators.required],
      "raw_product_reorder_level":['12',Validators.required],
      "raw_product_description":['abc',Validators.required],
      "raw_product_rate_pick_from":['',Validators.required]
    });

  }

  ngOnInit() {
    
  }

  onSubmit(data)
  {
   this.formService.storeData('admin/storeRawProduct',data.value).then(data=>{
      let status:any = data
      if(status.status){
        alertFunctions.typeSuccess('Raw Product added Successfully');
      }
   })
   .catch(error=>{
     console.log(error);
   })
  }
}
