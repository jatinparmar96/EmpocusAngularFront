import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'app/shared/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormDataService } from 'app/shared/services/form-data.service';
import { ShareService } from 'app/shared/services/share.service';
import { NotifyService } from 'app/shared/services/notify.service';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.scss']
})
export class AccountCreateComponent implements OnInit {

  account_data: FormGroup;
  account: FormGroup;
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
    this.account_data= this.fb.group({
      "address_id":['new',Validators.required],
      "id":['new',Validators.required],
      "account_name":['',Validators.required],
      "account_no_of_employee":['',Validators.required],
      "account_annual_revenue":['',Validators.required],
      "account_website":['',Validators.required],
      "account_phone":['',Validators.required],
      "account_industry_type":['',Validators.required],
      "account_business_type":['',Validators.required],
      "account_building_no":['',Validators.required],
      "account_road_number":['',Validators.required],
      "account_landmark":['',Validators.required],
      "account_pincode":['',Validators.required],
      "account_country":['',Validators.required],
      "account_state":['',Validators.required],
      "account_city":['',Validators.required],
      "account_facebook":['',Validators.required],
      "account_twitter":['',Validators.required],
      "account_linkedin":['',Validators.required],
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
		this.apiService.get("admin/account/"+id)
		.then(data => { 
			let l_data: any = data;
      this.account_data.patchValue(l_data.data);					
      console.log(this.account_data.value)
		})
	}
  addOrUpdate(account){		
		this.formTouched = true;
		if(account.invalid){
			return false;
		}
		this.resetErrorMessages();
		this.isProcessing = true;
		
			//post request
			this.apiService.post("admin/account",account.value).then( data => {
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
      "account_name":[""],
      "account_no_of_employee":[""],
      "account_annual_revenue":[""],
      "account_website":[""],
      "account_phone":[""],
      "account_industry_type":[""],
      "account_business_type":[""],
      "account_building_no":[""],
      "account_road_number":[""],
      "account_landmark":[""],
      "account_pincode":[""],
      "account_country":[""],
      "account_state":[""],
      "account_city":[""],
      "account_facebook":[""],
      "account_twitter":[""],
      "account_linkedin":[""],
		}
  }
  
  cancel(){
    this.router.navigateByUrl('/crm/account/create');
  }

}