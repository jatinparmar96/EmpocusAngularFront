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

  data: FormGroup;
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
    this.data= this.fb.group({
      "address_id":['new',Validators.required],
      "id":['new',Validators.required],
      "name":['',Validators.required],
      "no_of_employee":['',Validators.required],
      "annual_revenue":['',Validators.required],
      "website":['',Validators.required],
      "phone":['',Validators.required],
      "industry_type":['',Validators.required],
      "business_type":['',Validators.required],
      "account_address_building":['',Validators.required],
      "account_address_road_name":['',Validators.required],
      "account_address_landmark":['',Validators.required],
      "account_address_pincode":['',Validators.required],
      "account_address_country":['',Validators.required],
      "account_address_state":['',Validators.required],
      "account_address_city":['',Validators.required],
      "facebook_link":['',Validators.required],
      "twitter_link":['',Validators.required],
      "linkedin_link":['',Validators.required],
      "latitude":['',Validators.required],
      "longitude":['',Validators.required],
    });
    this.resetErrorMessages();
  }
  ngOnInit() {

    this.route.params.subscribe(params => {

			if(params['id']=='new'){
        console.log(params['id'])
        this.id="new";
        navigator.geolocation.getCurrentPosition((position) => {
          console.log("Got position", position.coords);
          this.data.value.latitude = position.coords.latitude;
          this.data.value.longitude = position.coords.longitude;
        });
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
      this.data.patchValue(l_data.data);
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
			this.apiService.post("admin/crm/account",account.value).then( data => {
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
      "name":[""],
      "no_of_employee":[""],
      "annual_revenue":[""],
      "website":[""],
      "phone":[""],
      "industry_type":[""],
      "business_type":[""],
      "building_no":[""],
      "road_number":[""],
      "landmark":[""],
      "pincode":[""],
      "country":[""],
      "state":[""],
      "city":[""],
      "facebook":[""],
      "twitter":[""],
      "linkedin":[""],
		}
  }

  cancel(){
    this.router.navigateByUrl('/crm/account/new');
  }
}
