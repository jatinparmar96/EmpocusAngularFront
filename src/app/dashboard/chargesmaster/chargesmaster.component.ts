import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../shared/services/api.service';
import { ShareService } from '../../shared/services/share.service';
import { FormDataService } from '../../shared/services/form-data.service';
import * as alertFunctions from '../../shared/data/sweet-alert';


@Component({
  selector: 'app-chargesmaster',
  templateUrl: './chargesmaster.component.html',
  styleUrls: ['./chargesmaster.component.scss']
})
export class ChargesmasterComponent implements OnInit {

chargeMaster: FormGroup;
  constructor(
    private fb:FormBuilder,
    private apiService:ApiService,
    private formService:FormDataService,
  ) { 
    this.chargeMaster = this.fb.group({
      "raw_product_product_name":['PName',Validators.required],
    });

  }

  ngOnInit() {
    
  }

  onSubmit(data)
  {
   this.formService.storeData('admin/chargeMaster',data.value).then(data=>{
      let status:any = data
      if(status.status){
        alertFunctions.typeSuccess('Charge Master added Successfully');
      }
   })
   .catch(error=>{
     console.log(error);
   })
  }
}
