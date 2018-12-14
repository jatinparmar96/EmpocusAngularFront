import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'app/shared/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormDataService } from 'app/shared/services/form-data.service';
import { ShareService } from 'app/shared/services/share.service';
import { NotifyService } from 'app/shared/services/notify.service';

@Component({
  selector: 'app-billing-create',
  templateUrl: './billing-create.component.html',
  styleUrls: ['./billing-create.component.scss']
})
export class BillingCreateComponent implements OnInit {


//Change Starts Here
active = 'today';
  debug = true;
  formTouched: boolean = false;
  isProcessing: boolean = false;
  errors: any;
  id: any = "new";
  // Replacable
  billing_data: FormGroup;
  billing: any;
  // Replacable
  fieldArray: Array<any> = [];
  newAttribute: any = {};
  closeResult: String;


  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private modalService: NgbModal,
    private formService: FormDataService,
    private shareService: ShareService,
    private notifyService: NotifyService,
    private router:Router,
  ) {
    this.billing_data = fb.group({
      "address_id":['new',Validators.required],
      "id":['new',Validators.required],
      "customer_name":['',Validators.required],
      "customer_address":['',Validators.required],
      "quoation_date":['',Validators.required],
      "billing_validity":['',Validators.required],
      "delivery_at":['',Validators.required],
      "transporter_name":['',Validators.required],
      "eway_bill":['',Validators.required],
      "gross_amount":['',Validators.required],
      "discount_value":['',Validators.required],
      "discount_in":['',Validators.required],
      "del_charges":['',Validators.required],
      "grand_total":['',Validators.required],
      "product_name":['',Validators.required],
      "product_qty":['',Validators.required],
      "product_rate":['',Validators.required],
      "product_discount_in":['',Validators.required],
      "product_discount_value":['',Validators.required],
      "product_applied_gst_percentage":['',Validators.required],
      "product_applied_gst_rate":['',Validators.required],
      "product_sub_total":['',Validators.required],
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
		this.apiService.get("admin/crm/billing/"+id)
		.then(data => { 
			let l_data: any = data;
			this.billing_data.patchValue(l_data.data);					
		})
	}
  addOrUpdate(billing){
    // this.notifyService.show({
    //   title: 'Success',
    //   message: 'Done'
    // }, 'success');
		
		this.formTouched = true;
		if(billing.invalid){
			return false;
		}
		this.resetErrorMessages();
		this.isProcessing = true;
		
			//post request
			this.apiService.post("admin/crm/billing",billing.value).then( data => {
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
      "customer_name":[""],
      "customer_address":[""],
      "quoation_date":[""],
      "billing_validity":[""],
      "delivery_at":[""],
      "transporter_name":[""],
      "eway_bill":[""],
      "gross_amount":[""],
      "discount_value":[""],
      "discount_in":[""],
      "del_charges":[""],
      "grand_total":[""],
      "product_name":[""],
      "product_qty":[""],
      "product_rate":[""],
      "product_discount_in":[""],
      "product_discount_value":[""],
      "product_applied_gst_percentage":[""],
      "product_applied_gst_rate":[""],
      "product_sub_total":[""],
		}
  }
  
  cancel(){
    this.router.navigateByUrl('/dashboard/crm/billing/create');
  }
// 3 Ends
open(content) {
  this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'lg'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}
getDismissReason(reason) {

}
addFieldValue() {

  this.fieldArray.push(this.newAttribute)
  this.newAttribute = {};
}
deleteFieldValue(index) {
this.fieldArray.splice(index, 1);
}

}





