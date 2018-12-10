import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Product, SellingPoint } from '../../product';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'app/shared/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormDataService } from 'app/shared/services/form-data.service';
import { ShareService } from 'app/shared/services/share.service';
import { NotifyService } from 'app/shared/services/notify.service';

@Component({
  selector: 'app-quotation-create',
  templateUrl: './quotation-create.component.html',
  styleUrls: ['./quotation-create.component.scss']
})
export class QuotationCreateComponent implements OnInit {
  

data: FormGroup;
  deal: FormGroup;
  formTouched: boolean = false;
  isProcessing: boolean = false;
  errors: any;
  id: any = "new";
  fieldArray: Array<any> = [];
  newAttribute: any = {};
  closeResult: String;
  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private modalService: NgbModal,
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
      "customer_name":['',Validators.required],
      "customer_address":['',Validators.required],
      "quoation_date":['',Validators.required],
      "quotation_validity":['',Validators.required],
      "delivery_at":['',Validators.required],
      "transporter_name":['',Validators.required],
      "eway_bill":['',Validators.required],
      "gross_amount":['',Validators.required],
      "discount":['',Validators.required],
      "del_charges":['',Validators.required],
      "grand_total":['',Validators.required],
      "productName":['',Validators.required],
      "product_qty":['',Validators.required],
      "product_rate":['',Validators.required],
      "product_discount":['',Validators.required],
      "product_appliedGSTPer":['',Validators.required],
      "product_appliedGSTRate":['',Validators.required],
      "product_percentageCGST":['',Validators.required],
      "product_amtCGST":['',Validators.required],
      "product_percentageSGST":['',Validators.required], 
      "product_amtSGST":['',Validators.required], 
           

      
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
      this.data.patchValue(l_data.data);					
      console.log(this.data.value)
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
    this.router.navigateByUrl('/dashboard/crm/deal');
  }
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


