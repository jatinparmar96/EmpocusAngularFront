import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'app/shared/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormDataService } from 'app/shared/services/form-data.service';
import { ShareService } from 'app/shared/services/share.service';
import { NotifyService } from 'app/shared/services/notify.service';

@Component({
  selector: 'app-bom-basic',
  templateUrl: './bom-basic.component.html',
  styleUrls: ['./bom-basic.component.scss']
})
export class BomBasicComponent implements OnInit {

  active = 'today';
  debug = true;
  formTouched: boolean = false;
  isProcessing: boolean = false;
  errors: any;
  id: any = "new";

  bom_basic_details_data: FormGroup;
  bom_basic_details: any;

  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private formService: FormDataService,
    private shareService: ShareService,
    private notifyService: NotifyService,
    private router:Router,
  ) { 
    this.bom_basic_details_data= this.fb.group({
      "id":['',Validators.required],
      "bom_basic_details_name":['',Validators.required],
      "bom_basic_details_number":['',Validators.required],
      "bom_basic_details_date":['',Validators.required],
      "bom_basic_details_rev_name":['',Validators.required],
      "bom_basic_details_rev_date":['',Validators.required],
      "bom_basic_details_item_name":['',Validators.required],
      "bom_basic_details_item_code":['',Validators.required],
  })
}

  ngOnInit() {
  }

  toNext(){
    this.router.navigateByUrl('/dashboard/bom/process');
  }

}
