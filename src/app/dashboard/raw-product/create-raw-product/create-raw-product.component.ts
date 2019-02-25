import { Component, OnInit } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../../shared/services/api.service';
import { FormDataService } from '../../../shared/services/form-data.service';
import * as alertFunctions from '../../../shared/data/sweet-alert';
import { Router, ActivatedRoute } from '@angular/router';
import { ShareService } from '../../../shared/services/share.service';
import { NotifyService } from '../../../shared/services/notify.service';


@Component({
  selector: 'app-create-raw-product',
  templateUrl: './create-raw-product.component.html',
  styleUrls: ['./create-raw-product.component.scss']
})
export class CreateRawProductComponent implements OnInit {

  active = 'today';
  debug = true;
  formTouched: boolean = false;
  isProcessing: boolean = false;
  errors: any;
  id: any = "new";
  data:any;
  taxData:any;

  raw_product_data: FormGroup;
  raw_product: any;
  taxes: any;
  productCategories: any;
  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private formService: FormDataService,
    private shareService: ShareService,
    private notifyService: NotifyService,
    private router:Router,
  ) {
        this.shareService.setVisibility(false)
        apiService.get('admin/uom_full_list').then(data=>{
          let l_data:any = data;
          if(l_data.status)
          {
            this.data = l_data.data
          }
        })
        apiService.get('admin/tax_full_list').then(taxData=>{

            let l_taxData:any = taxData;
            if(l_taxData.status)
            {
              this.taxes = l_taxData.data
            }
        })
        apiService.get('admin/product_category_full_list').then(productCategoryData=>{

            let l_product_category_data:any = productCategoryData;
            if(l_product_category_data.status)
            {
              this.productCategories = l_product_category_data.data
            }
          })

        this.raw_product_data = this.fb.group({
          "id":['new',Validators.required],
          "product_name":['',Validators.required],
          "product_display_name":['',Validators.required],
          "product_code":['',Validators.required],
          "product_uom":['',Validators.required],
          "product_conv_uom":['',Validators.required],
          "product_conv_factor":['',Validators.required],
          "product_batch_type":['1',Validators.required],
          "product_stock_ledger":['0',Validators.required],
          "product_mrp_rate":['',Validators.required],
          "product_rate_pick":['',Validators.required],
          "product_purchase_rate":['',Validators.required],
          "product_sales_rate":['',Validators.required],
          "product_gst_rate":['',Validators.required],
          "product_max_level":['',Validators.required],
          "product_min_level":['',Validators.required],
          "product_description":['',Validators.required],
          "product_category":['',Validators.required],
          "product_trade_name":['',Validators.required],
          "product_hsn":['',Validators.required],
          "product_type":['',Validators.required],
          "product_store_location":['',Validators.required],
        });
        this.resetErrorMessages()
  }


  ngOnInit() {
    // 2 Starts

    this.route.params.subscribe(params => {

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
		this.apiService.get("admin/raw_product/"+id)
		.then(data => {
      let l_data: any = data;
      this.raw_product_data.patchValue(l_data.data);

		})
	}
  addOrUpdate(raw_product){

    this.formTouched = true;
		//  if(raw_product.invalid){
		//  	return false;
		//  }
		this.resetErrorMessages();
		this.isProcessing = true;

			//post request
			this.apiService.post("admin/raw_product",raw_product.value).then( data => {
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
                  this.errors = result.error
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
      "product_display_name": [""],
      "product_name": [""],
      "product_code": [""],
      "product_raw_product": [""],
      "product_conv_raw_product": [""],
      "product_conv_factor": [""],
      "product_batch_type": [""],
      "product_maintain_stock_ledger": [""],
      "product_mrp_rate": [""],
      "product_gst_rate": [""],
      "product_max_level": [""],
      "product_min_level": [""],
      "product_description": [""],
      "product_rate_pick_from": [""],
      "product_product_category": [""],
      "product_hsn_code": [""],
      "product_product_type": [""],
		}
  }

  toBack()
  {
    this.router.navigateByUrl('/dashboard/raw-product');
  }
// 3 Ends
}
