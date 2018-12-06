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
  data: FormGroup;
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
    this.data= this.fb.group({
      "address_id":['new',Validators.required],
      "id":['new',Validators.required],
      "first_name":['',Validators.required],
      "last_name":['',Validators.required],
      "email":['',Validators.required],
      "primary_number":['',Validators.required],
      "account_name":['',Validators.required],
      "job_title":['',Validators.required],
      "department":['',Validators.required],
      "work":['',Validators.required],
      "mobile":['',Validators.required],
      "status":['',Validators.required],
      "business_type":['',Validators.required],
      "contact_address_building":['',Validators.required],
      "contact_address_road_name":['',Validators.required],
      "contact_address_landmark":['',Validators.required],
      "contact_address_pincode":['',Validators.required],
      "contact_address_country":['',Validators.required],
      "contact_address_state":['',Validators.required],
      "contact_address_city":['',Validators.required],
      "facebook_link":['',Validators.required],
      "twitter_link":['',Validators.required],
      "linkedin_link":['',Validators.required],
      "source":[' ',Validators.required],
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
		this.apiService.get("admin/contact/"+id)
		.then(data => { 
			let l_data: any = data;
      this.data.patchValue(l_data.data);					
      console.log(this.data.value)
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
      "first_name":[""],
      "last_name":[""],
      "email":[""],
      "primary_number":[""],
      "account_name":[""],
      "job_title":[""],
      "department":[""],
      "work":[""],
      "mobile":[""],
      "status":[""],
      "business_type":[""],
      "building_no":[""],
      "road_number":[""],
      "landmark":[""],
      "pincode":[""],
      "country":[""],
      "state":[""],
      "city":[""],
      "facebook":[""],
      "linkedin":[""],
      "source":[""],
      "campaign":[""],
      "medium":[""],
      "keyword":[""],
		}
  }
  
  cancel(){
    this.router.navigateByUrl('/dashboard/crm/contact');
  }

}

