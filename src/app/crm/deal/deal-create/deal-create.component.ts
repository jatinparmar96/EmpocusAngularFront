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
active = 'today';
  debug = true;
  formTouched: boolean = false;
  isProcessing: boolean = false;
  errors: any;
  id: any = "new";
  // Replacable
  deal_data: FormGroup;
  deal: any;

  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private formService: FormDataService,
    private shareService: ShareService,
    private notifyService: NotifyService,
    private router:Router,
  ) {
    this.deal_data = fb.group({
      "address_id":['new',Validators.required],
      "id":['new',Validators.required],
      "first_name":['',Validators.required],
      "last_name":['',Validators.required],
      "stage":['',Validators.required],
      "product":['',Validators.required],
      "value":['',Validators.required],
      "Payment_status":['',Validators.required],
      "expected_close_date":['',Validators.required],
      "probablity":['',Validators.required],
      "type":['',Validators.required],
      "source":['',Validators.required],
      "campaign":['',Validators.required],
    })
   }

  ngOnInit() {
    // 2 Starts
    this.route.params.subscribe(params => {
      console.log(params['id'])
			if(params['id']=='new'){
				this.id="new";
			}else{
				this.id = +params['id']; // (+) converts string 'id' to a number
				this.getData(this.id);
			}
    });
    // 2 Ends
  
  }
  // 3 Starts
  getData(id:any){
		this.apiService.get("admin/crm/deal/"+id)
		.then(data => { 
			let l_data: any = data;
			this.deal_data.patchValue(l_data.data);					
		})
	}
  addOrUpdate(deal){
    // this.notifyService.show({
    //   title: 'Success',
    //   message: 'Done'
    // }, 'success');
		
		this.formTouched = true;
		if(deal.invalid){
			return false;
		}
		this.resetErrorMessages();
		this.isProcessing = true;
		
			//post request
			this.apiService.post("admin/crm/deal",deal.value).then( data => {
        let result: any = data;
				//success
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
      "first_name":[""],
      "last_name":[""],
      "stage":[""],
      "product":[""],
      "value":[""],
      "Payment_status":[""],
      "expected_close_date":[""],
      "probablity":[""],
      "type":[""],
      "source":[""],
      "campaign":[""],
		}
  }
  
  cancel(){
    this.router.navigateByUrl('/dashboard/crm/deal/create');
  }
// 3 Ends
}


