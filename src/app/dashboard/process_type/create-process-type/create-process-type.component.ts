import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'app/shared/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormDataService } from 'app/shared/services/form-data.service';
import { ShareService } from 'app/shared/services/share.service';
import { NotifyService } from 'app/shared/services/notify.service';

@Component({
  selector: 'app-create-process-type',
  templateUrl: './create-process-type.component.html',
  styleUrls: ['./create-process-type.component.scss']
})
export class CreateProcessTypeComponent implements OnInit {

  active = 'today';
  button_text ='Add processType'
  debug = true;
  formTouched: boolean = false;
  isProcessing: boolean = false;
  errors: any;
  id: any = "new";
  // Replacable
  next:boolean = false;
  unit_data: FormGroup;
  processType: any;
  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private formService: FormDataService,
    private shareService: ShareService,
    private notifyService: NotifyService,
    private router:Router,
  ) 
  // 1 Starts
  {
    this.shareService.setVisibility(false);
    this.unit_data = fb.group({
      "processType_name": ['', Validators.required],
      "id":['new',Validators.required],
    });
    this.resetErrorMessages();
  }
  // 1 Ends
  
  

  ngOnInit() {
    // 2 Starts
    this.route.params.subscribe(params => {
      console.log(params['id'])
			if(params['id']=='new'){
				this.id="new";
			}else{
				this.id = +params['id']; // (+) converts string 'id' to a number
        this.getData(this.id);
        this.button_text = "Edit processType";
			}
    });
    // 2 Ends
  
  }
  // 3 Starts
  getData(id:any){
		this.apiService.get("admin/processType/"+id)
		.then(data => { 
			let l_data: any = data;
			this.unit_data.patchValue(l_data.data);					
		})
	}
  addOrUpdate(processType){
    console.log(processType)
		this.formTouched = true;
		if(processType.invalid){
			return false;
		}
		this.resetErrorMessages();
		this.isProcessing = true;
		
			//post request
			this.apiService.post("admin/processType",processType.value).then( data => {
        let result: any = data;
				//success
        this.isProcessing = false;
        if(result.status)
							{
								this.notifyService.show({
									title: 'Success',
									message: result.message
                },'success');
                if(this.next)
                {
               
                  this.resetForm(processType);
                  
                }
                else
                {
                  console.log('else');
                }

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
			"id": [""],
			"processType_name": [""]	
		}
  }
  resetForm(processType)
  {
    console.log('form Reseted')
    processType.id = 'new';
    processType.processType_name = '';
  }
  advanceNext()
  {
    this.next = true;
  }
  cancel(){
    this.router.navigateByUrl('/dashboard/process-type');
  }
 
// 3 Ends
}
