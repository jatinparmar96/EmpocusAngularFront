import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'app/shared/services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormDataService } from 'app/shared/services/form-data.service';
import { ShareService } from 'app/shared/services/share.service';
import { NotifyService } from 'app/shared/services/notify.service';
import { DataService, Person} from 'app/shared/services/data.service';
import { map } from 'rxjs/operators';


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-appointment-create',
  templateUrl: './appointment-create.component.html',
  styleUrls: ['./appointment-create.component.scss']
})
export class AppointmentCreateComponent implements OnInit {


  people: [] = [];
  selectedPeople = [];
  selectedPeople2 = [];


  active= 'today';
  appoint_data: FormGroup;
  appoint: FormGroup;
  formTouched: boolean = false;
  isProcessing: boolean = false;
  errors: any;
	id: any = "new";
  constructor(
    private dataService: DataService,
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
    this.appoint_data= this.fb.group({
      "address_id":['new',Validators.required],
      "id":['new',Validators.required],
      "appoint_create_title":['',Validators.required],
      "appoint_create_from_date":['',Validators.required],
      "appoint_create_from_time":['',Validators.required],
      "appoint_create_to_date":['',Validators.required],
      "appoint_create_to_time":['',Validators.required],
      "appoint_create_outcome":['',Validators.required],
      "appoint_create_where":['',Validators.required],
      "appoint_create_related_to":['',Validators.required],
      "appoint_create_description":['',Validators.required],
    });
    this.resetErrorMessages();
  }

  ngOnInit() {
    this.dataService.getPeople()
    .pipe(map(x => x.filter(y => !y.disabled)))
    .subscribe((res) => {
        this.people = res;
        this.selectedPeople = [this.people[0].id, this.people[1].id];
    });

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
		this.apiService.get("admin/appoint/"+id)
		.then(data => { 
			let l_data: any = data;
      this.appoint_data.patchValue(l_data.data);					
      console.log(this.appoint_data.value)
		})
	}
  addOrUpdate(appoint){		
		this.formTouched = true;
		if(appoint.invalid){
			return false;
		}
		this.resetErrorMessages();
		this.isProcessing = true;
		
			//post request
			this.apiService.post("admin/appoint",appoint.value).then( data => {
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
      "appoint_create_title": [""],
      "appoint_create_from_date":[""],
      "appoint_create_from_time":[""],
      "appoint_create_to_date":[""],
      "appoint_create_to_time":[""],
      "appoint_create_outcome":[""],
      "appoint_create_where":[""],
      "appoint_create_related_to":[""],
      "appoint_create_description":[""],
		}
  }
  
  cancel(){
    this.router.navigateByUrl('/crm/appoint/create');
  }

}