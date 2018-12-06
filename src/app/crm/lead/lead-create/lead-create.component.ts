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
      "company_name":['',Validators.required],
      "first_name":['',Validators.required],
      "last_name":['',Validators.required],
      "email":['',Validators.required],
      "primary_contact_number":['',Validators.required],
      "department":['',Validators.required],
      "lead_status":['',Validators.required],
      "company_employee_number":['',Validators.required],
      "company_annual_rev":['',Validators.required],
      "company_website":['',Validators.required],
      "company_phone":['',Validators.required],
      "industry_type":['',Validators.required],
      "business_type":['',Validators.required],
      "lead_address_building":['',Validators.required],
      "lead_address_road_name":['',Validators.required],
      "lead_address_landmark":['',Validators.required],
      "lead_address_pincode":['',Validators.required],
      "lead_address_country":['',Validators.required],
      "lead_address_state":['',Validators.required],
      "lead_address_city":['',Validators.required],
      "facebook_link":[' ',Validators.required],
      "twitter_link":['',Validators.required],
      "linkedin_link":['',Validators.required],
      "deal_name":['',Validators.required],
      "deal_value":['',Validators.required],
      "deal_expected_close_date":['',Validators.required],
      "product":['',Validators.required],
      "source":['',Validators.required],
      "campaign":['',Validators.required],
      "medium":['',Validators.required],
      "keyword":['',Validators.required],
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
      "company_name":[""],
      "first_name":[""],
      "last_name":[""],
      "email":[""],
      "primary_contact_number":[""],
      "department":[""],
      "lead_status":[""],
      "company_employee_number":[""],
      "company_annual_rev":[""],
      "company_website":[""],
      "company_phone":[""],
      "industry_type":[""],
      "business_type":[""],
      "lead_address_building":[""],
      "lead_address_road_name":[""],
      "lead_address_landmark":[""],
      "lead_address_pincode":[""],
      "lead_address_country":[""],
      "lead_address_state":[""],
      "lead_address_city":[""],
      "facebook_link":[""],
      "twitter_link":[""],
      "linkedin_link":[""],
      "deal_name":[""],
      "deal_value":[""],
      "deal_expected_close_date":[""],
      "product":[""],
      "source":[""],
      "campaign":[""],
      "medium":[""],
      "keyword":[""],
		}
  }
  
  cancel(){
    this.router.navigateByUrl('/crm/lead/create');
  }

}