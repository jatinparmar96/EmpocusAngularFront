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
  templateUrl: './create-category-master.component.html',
  styleUrls: ['./create-category-master.component.scss']
})
export class CreateCategoryMasterComponent implements OnInit {

  active = 'today';
  debug = true;
  formTouched: boolean = false;
  isProcessing: boolean = false;
  errors: any;
  id: any = "new";
  data:any;
  taxData:any;

  category_data: FormGroup;
  category: any;
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
    this.category_data = this.fb.group({
      "id":['new',Validators.required],
      "category_name":['abc',Validators.required],
    });
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
		this.apiService.get("admin/category/"+id)
		.then(data => { 
			let l_data: any = data;
			this.category_data.patchValue(l_data.data);					
		})
	}
  addOrUpdate(category){
    
		this.formTouched = true;
		// if(category.invalid){
		// 	return false;
		// }
		this.resetErrorMessages();
		this.isProcessing = true;
		
			//post request
			this.apiService.post("admin/category",category.value).then( data => {
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
      "category_name": [""],
		}
  }
  
  cancel(){
    this.router.navigateByUrl('/dashboard/category');
  }
// 3 Ends
}
