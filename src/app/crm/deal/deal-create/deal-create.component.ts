import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'app/shared/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormDataService } from 'app/shared/services/form-data.service';
import { ShareService } from 'app/shared/services/share.service';
import { NotifyService } from 'app/shared/services/notify.service';

@Component({
  selector: 'app-deal-create',
  templateUrl: './deal-create.component.html',
  styleUrls: ['./deal-create.component.scss']
})
export class DealCreateComponent implements OnInit {

  deal_data: FormGroup;
  deal: FormGroup;
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
    this.deal_data= this.fb.group({
      "address_id":['new',Validators.required],
      "id":['new',Validators.required],
      "deal_first_name":['',Validators.required],
      "deal_last_name":['',Validators.required],
      "deal_deal_stage":['',Validators.required],
      "deal_product":['',Validators.required],
      "deal_value":['',Validators.required],
      "deal_Payment_status":['',Validators.required],
      "deal_expected_close_date":['',Validators.required],
      "deal_probablity":['',Validators.required],
      "deal_type":['',Validators.required],
      "deal_source":['',Validators.required],
      "deal_campaign":['',Validators.required],
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
		this.apiService.get("admin/deal/"+id)
		.then(data => { 
			let l_data: any = data;
      this.deal_data.patchValue(l_data.data);					
      console.log(this.deal_data.value)
		})
	}
  addOrUpdate(deal){		
		this.formTouched = true;
		if(deal.invalid){
			return false;
		}
		this.resetErrorMessages();
		this.isProcessing = true;
		
			//post request
			this.apiService.post("admin/deal",deal.value).then( data => {
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
      "deal_first_name":[""],
      "deal_last_name":[""],
      "deal_deal_stage":[""],
      "deal_product":[""],
      "deal_value":[""],
      "deal_Payment_status":[""],
      "deal_expected_close_date":[""],
      "deal_probablity":[""],
      "deal_type":[""],
      "deal_source":[""],
      "deal_campaign":[""],
		}
  }
  
  cancel(){
    this.router.navigateByUrl('/dashboard/crm/deal');
  }

}

