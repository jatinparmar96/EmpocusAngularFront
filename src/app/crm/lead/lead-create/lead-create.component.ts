import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'app/shared/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormDataService } from 'app/shared/services/form-data.service';
import { ShareService } from 'app/shared/services/share.service';
import { NotifyService } from 'app/shared/services/notify.service';

@Component({
  selector: 'app-lead-create',
  templateUrl: './lead-create.component.html',
  styleUrls: ['./lead-create.component.scss']
})
export class LeadCreateComponent implements OnInit {
  active= 'today';
  lead_data: FormGroup;
  Lead: FormGroup;
  formTouched: boolean = false;
  isProcessing: boolean = false;
  errors: any;
	id: any = "new";
  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private formService: FormDataService,
    private shareService: ShareService,
    private notifyService: NotifyService,
    private router:Router,
  ) 
  {
    this.shareService.setVisibility(false)
    this.lead_data= this.fb.group({
      "address_id":['new',Validators.required],
      "id":['new',Validators.required],
      "lead_create_company_name":['',Validators.required],
      "lead_create_first_name":['',Validators.required],
      "lead_create_last_name":['',Validators.required],
      "lead_create_email":['',Validators.required],
      "lead_create_primary_contact_number":['',Validators.required],
      "lead_create_department":['',Validators.required],
      "lead_create_lead_status":['',Validators.required],
      "lead_create_no_of_emp":['',Validators.required],
      "lead_create_company_annual_rev":['',Validators.required],
      "lead_create_company_website":['',Validators.required],
      "lead_create_company_phone":['',Validators.required],
      "lead_create_industry_type":['',Validators.required],
      "lead_create_business_type":['',Validators.required],
      "lead_create_building_no":['',Validators.required],
      "lead_create_road_number":['',Validators.required],
      "lead_create_landmark":['',Validators.required],
      "lead_create_pincode":['',Validators.required],
      "lead_create_country":['',Validators.required],
      "lead_create_state":['',Validators.required],
      "lead_create_city":['',Validators.required],
      "lead_create_facebook":[' ',Validators.required],
      "lead_create_twitter":['',Validators.required],
      "lead_create_linkedin":['',Validators.required],
      "lead_create_deal_name":['',Validators.required],
      "lead_create_deal_value":['',Validators.required],
      "lead_create_deal_expected_close_date":['',Validators.required],
      "lead_create_product":['',Validators.required],
      "lead_create_source":['',Validators.required],
      "lead_create_campaign":['',Validators.required],
      "lead_create_medium":['',Validators.required],
      "lead_create_keyword":['',Validators.required],
    });
    this.resetErrorMessages();
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      console.log(params['id'])
			if(params['id']=='new'){
				this.id="new";
			}else{
				this.id = +params['id']; // (+) converts string 'id' to a number
        this.getData(this.id);
        
			}
    });
    
  
  }
  
  getData(id:any){
		this.apiService.get("admin/lead/"+id)
		.then(data => { 
			let l_data: any = data;
      this.lead_data.patchValue(l_data.data);					
      console.log(this.lead_data.value)
		})
	}
  addOrUpdate(lead){		
		this.formTouched = true;
		if(lead.invalid){
			return false;
		}
		this.resetErrorMessages();
		this.isProcessing = true;
		
			//post request
			this.apiService.post("admin/lead",lead.value).then( data => {
        let result: any = data;
        //success
        console.log(result);
        this.isProcessing = false;
        if(result.status)
							{
								this.notifyService.show({
									title: 'Success',
									message: result.message
								},'success'); 
							}
							else{
									this.notifyService.show({
										title: 'Error',
										message: result.message
                  }, 'error');
                  this.errors = result.error;
							}
    
			})
			.catch( error => {
        this.isProcessing = false;
        let errors: any = error;
        this.errors = errors;
			})
		
  }
  resetErrorMessages(){
		this.errors = {			
      "ca_company_name": [""],
      "lead_create_company_name":[""],
      "lead_create_first_name":[""],
      "lead_create_last_name":[""],
      "lead_create_email":[""],
      "lead_create_primary_contact_number":[""],
      "lead_create_department":[""],
      "lead_create_lead_status":[""],
      "lead_create_no_of_emp":[""],
      "lead_create_company_annual_rev":[""],
      "lead_create_company_website":[""],
      "lead_create_company_phone":[""],
      "lead_create_industry_type":[""],
      "lead_create_business_type":[""],
      "lead_create_building_no":[""],
      "lead_create_road_number":[""],
      "lead_create_landmark":[""],
      "lead_create_pincode":[""],
      "lead_create_country":[""],
      "lead_create_state":[""],
      "lead_create_city":[""],
      "lead_create_facebook":[""],
      "lead_create_twitter":[""],
      "lead_create_linkedin":[""],
      "lead_create_deal_name":[""],
      "lead_create_deal_value":[""],
      "lead_create_deal_expected_close_date":[""],
      "lead_create_product":[""],
      "lead_create_source":[""],
      "lead_create_campaign":[""],
      "lead_create_medium":[""],
      "lead_create_keyword":[""],
		}
  }
  
  cancel(){
    this.router.navigateByUrl('/crm/lead/create');
  }

}