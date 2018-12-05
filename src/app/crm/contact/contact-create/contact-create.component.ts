import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'app/shared/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormDataService } from 'app/shared/services/form-data.service';
import { ShareService } from 'app/shared/services/share.service';
import { NotifyService } from 'app/shared/services/notify.service';

@Component({
  selector: 'app-contact-create',
  templateUrl: './contact-create.component.html',
  styleUrls: ['./contact-create.component.scss']
})
export class ContactCreateComponent implements OnInit {
  active= 'today';
  contact_data: FormGroup;
  Contact: FormGroup;
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
    this.contact_data= this.fb.group({
      "address_id":['new',Validators.required],
      "id":['new',Validators.required],
      "contact_first_name":['',Validators.required],
      "contact_last_name":['',Validators.required],
      "contact_email":['',Validators.required],
      "contact_primary_contact_number":['',Validators.required],
      "contact_account_name":['',Validators.required],
      "contact_job_title":['',Validators.required],
      "contact_department":['',Validators.required],
      "contact_work":['',Validators.required],
      "contact_mobile":['',Validators.required],
      "contact_status":['',Validators.required],
      "contact_business_type":['',Validators.required],
      "contact_building_no":['',Validators.required],
      "contact_road_number":['',Validators.required],
      "contact_landmark":['',Validators.required],
      "contact_pincode":['',Validators.required],
      "contact_country":['',Validators.required],
      "contact_state":['',Validators.required],
      "contact_city":['',Validators.required],
      "contact_facebook":['',Validators.required],
      "contact_twitter":['',Validators.required],
      "contact_linkedin":['',Validators.required],
      "contact_source":[' ',Validators.required],
      "contact_campaign":['',Validators.required],
      "contact_medium":['',Validators.required],
      "contact_keyword":['',Validators.required],
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
		this.apiService.get("admin/contact/"+id)
		.then(data => { 
			let l_data: any = data;
      this.contact_data.patchValue(l_data.data);					
      console.log(this.contact_data.value)
		})
	}
  addOrUpdate(contact){		
		this.formTouched = true;
		if(contact.invalid){
			return false;
		}
		this.resetErrorMessages();
		this.isProcessing = true;
		
			//post request
			this.apiService.post("admin/contact",contact.value).then( data => {
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
      "contact_first_name":[""],
      "contact_last_name":[""],
      "contact_email":[""],
      "contact_primary_contact_number":[""],
      "contact_account_name":[""],
      "contact_job_title":[""],
      "contact_department":[""],
      "contact_work":[""],
      "contact_mobile":[""],
      "contact_status":[""],
      "contact_business_type":[""],
      "contact_building_no":[""],
      "contact_road_number":[""],
      "contact_landmark":[""],
      "contact_pincode":[""],
      "contact_country":[""],
      "contact_state":[""],
      "contact_city":[""],
      "contact_facebook":[""],
      "contact_linkedin":[""],
      "contact_source":[""],
      "contact_campaign":[""],
      "contact_medium":[""],
      "contact_keyword":[""],
		}
  }
  
  cancel(){
    this.router.navigateByUrl('/dashboard/crm/contact');
  }

}

